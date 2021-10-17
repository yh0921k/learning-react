import React, { useState } from 'react';

const todos = [
  {
    id: 1,
    value: 'Wash dished',
  },
  {
    id: 2,
    value: 'Clean the bed',
  },
  {
    id: 3,
    value: 'Running',
  },
  {
    id: 4,
    value: 'Learning',
  },
];

const App = () => {
  const [items, setItems] = useState(todos);

  const handleDoneClick = (todo) => {
    setItems((items) => items.filter((item) => item !== todo));
  };

  const handleRestoreClick = () => {
    setItems((items) => [
      ...items,
      todos.find((item) => !items.includes(item)),
    ]);
  };

  return (
    <>
      {items.map((todo) => (
        <div key={todo.id}>
          <span>{todo.value}</span>
          <button onClick={() => handleDoneClick(todo)}>Done</button>
        </div>
      ))}
      <button onClick={handleRestoreClick}>Restore</button>
    </>
  );
};

export default App;
