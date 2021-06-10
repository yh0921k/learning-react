import React, { Component } from 'react';
import ScrollBox from './class-component/Scrollbox';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 아래로
        </button>
        <button onClick={() => (this.scrollBox.box.scrollTop = 0)}>
          맨 위로
        </button>
      </div>
    );
  }
}

export default App;
