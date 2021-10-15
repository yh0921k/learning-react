import React, { useEffect, useRef, useState } from 'react';

const App = () => {
  const inputRef = useRef();
  const divRef = useRef();

  useEffect(() => {
    inputRef.current.focus();

    setTimeout(() => {
      divRef.current.style.backgroundColor = 'pink';
    }, 1000);
  }, []);
  return (
    <>
      <input ref={inputRef} />
      <div
        ref={divRef}
        style={{ height: 100, width: 100, backgroundColor: 'brown' }}
      />
    </>
  );
};

export default App;
