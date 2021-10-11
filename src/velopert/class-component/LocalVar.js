import React, { Component } from 'react';

class LocalVar extends Component {
  id = 1;
  setId = (n) => {
    this.id = n;
  };
  printId = () => {
    console.log(this.id);
  };

  render() {
    return <div>MyComponent</div>;
  }
}

export default LocalVar;
