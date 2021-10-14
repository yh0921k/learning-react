import React, { useEffect, useState } from 'react';

const Child = () => {
  console.log('   Child render Start');
  const [text, setText] = useState(() => {
    console.log('   Child useState()');
    return '';
  });

  useEffect(() => {
    console.log('   Child useEffect() No deps');

    return () => {
      console.log('   Child useEffect() No deps Clean Up');
    };
  });

  useEffect(() => {
    console.log('   Child useEffect() Empty deps ');

    return () => {
      console.log('   Child useEffect() Empty deps Clean Up');
    };
  }, []);

  useEffect(() => {
    console.log('   Child useEffect() [text] ');

    return () => {
      console.log('   Child useEffect() [text] Clean Up');
    };
  }, [text]);

  const handleChange = (event) => {
    setText(event.target.value);
  };
  const element = (
    <>
      <input onChange={handleChange} />
      <p>{text}</p>
    </>
  );
  console.log('   Child render End');
  return element;
};
const App = () => {
  console.log('App render Start');
  const [show, setShow] = useState(() => {
    console.log('App useState()');
    return false;
  });

  useEffect(() => {
    console.log('App useEffect() No deps');

    return () => {
      console.log('App useEffect() No deps Clean Up');
    };
  });

  useEffect(() => {
    console.log('App useEffect() Empty deps ');

    return () => {
      console.log('App useEffect() Empty deps Clean Up');
    };
  }, []);

  useEffect(() => {
    console.log('App useEffect() [show] ');

    return () => {
      console.log('App useEffect() [show] Clean Up');
    };
  }, [show]);

  const handleClick = () => {
    setShow((prev) => !prev);
  };
  console.log('App render End');
  return (
    <>
      <button onClick={handleClick}>Search</button>
      {show ? <Child /> : null}
    </>
  );
};

export default App;
