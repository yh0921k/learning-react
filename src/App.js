import React, { useState } from 'react';
import TodoTemplate from './todo-app/components/TodoTemplate';
import TodoInsert from './todo-app/components/TodoInsert';
import TodoList from './todo-app/components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'React Basic',
      checked: true,
    },
    {
      id: 2,
      text: 'Component Styling',
      checked: true,
    },
    {
      id: 3,
      text: 'Todo List Application',
      checked: false,
    },
  ]);

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default App;
