import React, { useEffect, useState } from 'react';

const App = () => {
  console.log('render');
  const [keyword, setKeyword] = useState(() => {
    console.log('initializer');
    return window.localStorage.getItem('keyword');
  });
  const [result, setResult] = useState('');
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    console.log('effect');
    window.localStorage.setItem('keyword', keyword);
  }, [keyword, typing]);

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
      <input onChange={handleChange} value={keyword} />
      <button onClick={handleClick}>Search</button>
      <p>{typing ? `Looking for...${keyword}` : result}</p>
    </>
  );
};

export default App;
