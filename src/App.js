import React, { useCallback, useRef, useState } from 'react';
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

  // 고유 값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; // nextId 증가
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} />
    </TodoTemplate>
  );
};

export default App;
