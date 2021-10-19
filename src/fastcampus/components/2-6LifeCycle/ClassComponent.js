import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = { date: new Date() };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.timerId = setInterval(() => this.tick(), 10000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.timerId);
  }

  tick() {
    console.log('tick');
    this.setState({ date: new Date() });
  }

  handleClick() {
    alert(this.state.date);
  }

  handleClickArrow = () => {
    alert(this.state.date);
  };

  render() {
    console.log('render');
    return (
      <div>
        <h1 onClick={this.handleClick}>Click Me(this binding)</h1>
        <h1 onClick={this.handleClickArrow}>Click Me(arrow function)</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default ClassComponent;
