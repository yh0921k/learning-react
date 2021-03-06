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

  const onChange = (e) => setInputText(e.target.value);
  const onClick = (e) => {
    setNames(names.concat({ id: nextId, text: inputText }));
    setNextId(nextId + 1);
    setInputText('');
  };

  const onRemove = (id) => {
    setNames(names.filter((name) => name.id !== id));
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  console.log(nameList);
  return (
    <div>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>Add</button>
      <ul>{nameList}</ul>
    </div>
  );
};

export default IterationSample;
