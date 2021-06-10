import React, { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: 'A1' },
    { id: 2, text: 'A2' },
    { id: 3, text: 'A3' },
    { id: 4, text: 'A4' },
  ]);

  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

  const nameList = names.map((name) => <li key={name.id}>{name.text}</li>);
  return (
    <div>
      <ul>{nameList}</ul>
    </div>
  );
};

export default IterationSample;
