import React from 'react';
import TodoTemplate from './todo-app/components/TodoTemplate';
import TodoInsert from './todo-app/components/TodoInsert';

const App = () => {
  return (
    <TodoTemplate>
      <TodoInsert />
    </TodoTemplate>
  );
};

export default App;
