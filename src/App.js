import React from 'react';
import Counter from './react-redux/components/Counter';
import Todos from './react-redux/components/Todos';

const App = () => {
  return (
    <div>
      <Counter number={0} />
      <hr />
      <Todos />
    </div>
  );
};

export default App;
