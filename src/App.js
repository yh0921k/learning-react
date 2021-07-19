import React from 'react';
import TodoTemplate from './todo-app/components/TodoTemplate';
import TodoInsert from './todo-app/components/TodoInsert';
import TodoList from './todo-app/components/TodoList';

const App = () => {
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  );
};

export default App;
