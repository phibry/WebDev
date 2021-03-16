import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  // Component level state
  state = {
    text: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'light');
    } else {
      // Take the submitted text, and search for this user via the github api
      // With .props we send this to App.js
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  // [e.target.name] -> input with name="text"
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>

        {/* If showClear is true, then add the button. && -> if true, then */}
        {showClear && (
          <button
            className="btn btn-light btn-block"
            // With .props we send this to App.js
            onClick={clearUsers}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
