import React from 'react';
import Todos from './react-redux/components/Todos';
import CounterContainer from './react-redux/containers/CounterContainer';

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <Todos />
    </div>
  );
};

export default App;
