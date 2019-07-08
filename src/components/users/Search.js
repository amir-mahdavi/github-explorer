import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
  state = { text: '' };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired
  };

  // use target name to be able to reuse handler for different elements (es6 hack!)
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search users..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input type="submit" value="Search" className="btn btn-dark btn-block" />
        </form>
      </div>
    );
  }
}
