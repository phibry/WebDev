import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContect from '../../context/alert/alertContext';

const Search = () => {
  // Initialize Context
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContect);
  // Initialize State
  const [text, setText] = useState('');

  // OnSubmit Event
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  // OnChange Event
  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>

      {/* If showClear is true, then add the button. && -> if true, then */}
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
