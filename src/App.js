import React from 'react';

const App = () => {
  const Text = ({ text }) => {
    if (text.charAt(0) === text.charAt(0).toUpperCase()) {
      return <h1>{text}</h1>;
    } else {
      return <h3>{text}</h3>;
    }
  };
  return (
    <>
      <Text text={'Text'} />
      <Text text={'text'} />
    </>
  );
};

export default App;
