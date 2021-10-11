import React from 'react';

const App = () => {
  const Number = ({ number }) => {
    return number % 2 === 0 ? <h1>{number}</h1> : <h3>{number}</h3>;
  };
  return (
    <>
      <Number number={2} />
      <Number number={1} />
    </>
  );
};

export default App;
