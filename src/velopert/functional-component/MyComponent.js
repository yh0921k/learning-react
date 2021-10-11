import PropTypes from 'prop-types';
import React, { Component } from 'react';

class MyComponent extends Component {
  static defaultProps = {
    name: 'JAVA',
  };

  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };

  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        Hello, My name is {name} <br />
        Hello, My name is {children} <br />
        My favorite number is {favoriteNumber}
      </div>
    );
  }
}

export default MyComponent;
