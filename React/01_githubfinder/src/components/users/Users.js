import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

// Function base Component
const Users = () => {
  // initialize context
  const githubContext = useContext(GithubContext);

  // Destructure items
  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          // we need key={user.id}
          // Each child of a list should have a unique "key" prop
          // <div key={user.id}>{user.login}</div>

          // Hand the user prop to the UserItem component
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

// CSS Styling
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
