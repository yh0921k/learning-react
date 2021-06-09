import React, { Component } from 'react';

class EventPractice extends Component {
  render() {
    return (
      <div>
        <h1>Practice</h1>
        <input
          type={'text'}
          name={'message'}
          placeholder={'Input Anything'}
          onChange={(e) => {
            console.log(e);
            console.log(e.target.value);
          }}
        />
      </div>
    );
  }
}

export default EventPractice;
