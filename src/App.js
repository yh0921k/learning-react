import React, { useEffect, useState } from 'react';

const todos = [
  [
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
  ],
  [
    {
      id: 4,
      value: 'Learning',
    },
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
  ],
  [
    {
      id: 3,
      value: 'Running',
    },
    {
      id: 1,
      value: 'Wash dished',
    },
    {
      id: 2,
      value: 'Clean the bed',
    },
    {
      id: 4,
      value: 'Learning',
    },
  ],
  [
    {
      id: 2,
      value: 'Clean the bed',
    },
    {
      id: 1,
      value: 'Wash dished',
    },
    {
      id: 3,
      value: 'Running',
    },
    {
      id: 4,
      value: 'Learning',
    },
  ],
];

const App = () => {
  const [items, setItems] = useState(todos[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * 3);
      setItems(todos[random]);

      return () => {
        clearInterval(interval);
      };
    }, 1000);
  }, []);
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
          <button onClick={() => handleDoneClick(todo)}>{todo.value}</button>
        </div>
      ))}
      <br />
      <br />
      <button onClick={handleRestoreClick}>Restore</button>
    </>
  );
};

export default App;
