import React, { useState } from 'react';

const App = () => {
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState('');
  const [typing, setTyping] = useState(false);
  function handleChange(event) {
    setKeyword(event.target.value);
    setTyping(true);
  }
  function handleClick() {
    setTyping(false);
    setResult(`We find results of ${keyword}`);
  }

  return (
    <>
      <input onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
      <p>{typing ? `Looking for...${keyword}` : result}</p>
    </>
  );
};

export default App;
