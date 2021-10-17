import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    username: '',
    message: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({ username: '', message: '' });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>Practice</h1>
        <input
          name={'username'}
          placeholder={'User Name'}
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          name={'message'}
          placeholder={'Input Anything'}
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
