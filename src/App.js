import React, { useEffect, useState } from 'react';

const App = () => {
  console.log('App render Start');
  const [show, setShow] = useState(() => {
    console.log('App useState()');
    return false;
  });

  useEffect(() => {
    console.log('App useEffect() No deps');
  });

  useEffect(() => {
    console.log('App useEffect() Empty deps ');
  }, []);

  useEffect(() => {
    console.log('App useEffect() [show] ');
  }, [show]);

  const handleClick = () => {
    setShow((prev) => !prev);
  };
  return (
    <>
      <button onClick={handleClick}>Search</button>
      {show ? (
        <>
          <input />
          <p></p>
        </>
      ) : null}
      {console.log('App render End')}
    </>
  );
};

export default App;
