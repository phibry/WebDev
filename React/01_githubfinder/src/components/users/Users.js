import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

// Function base Component
const Users = ({ users, loading }) => {
  // This is a class based component
  // While this class have a state, it makes sense for it to be a class

  // Since we changed the state and import it from the App, we now can change
  // ClassBasedComponend to a FunctionBasedComponent
  // state = {
  //   users: [
  //     {
  //       id: '1',
  //       login: 'mojombo',
  //       avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
  //       html_url: 'https://github.com/mojombo',
  //     },
  //     {
  //       id: '2',
  //       login: 'defunkt',
  //       avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
  //       html_url: 'https://github.com/defunkt',
  //     },
  //     {
  //       id: '3',
  //       login: 'pjhyett',
  //       avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
  //       html_url: 'https://github.com/pjhyett',
  //     },
  //   ],
  // };

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

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Users;
