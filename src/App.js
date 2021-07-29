import React, { Component } from 'react';

class App extends Component {
  state = {
    SplitMe: null,
  };

  handleClick = async () => {
    const loadedModule = await import('./code-splitting/SplitMe');
    this.setState({
      SplitMe: loadedModule.default,
    });
  };

  render() {
    const { SplitMe } = this.state;
    return (
      <div>
        <p onClick={this.handleClick}>Hello React</p>
        {SplitMe && <SplitMe />}
      </div>
    );
  }
}

export default App;
