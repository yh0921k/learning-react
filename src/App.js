import React, { useEffect, useState } from 'react';

function useLocalStorage(itemName, value = '') {
  const [state, setState] = useState(() => {
    return window.localStorage.getItem(itemName) || value;
  });

  useEffect(() => {
    window.localStorage.setItem(itemName, state);
  }, [state]);

  return [state, setState];
}

const App = () => {
  const [keyword, setKeyword] = useLocalStorage('keyword');
  const [result, setResult] = useLocalStorage('result');
  const [typing, setTyping] = useLocalStorage('typing', false);

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
