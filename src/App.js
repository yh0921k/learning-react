import React from 'react';

const App = () => {
  const Number = ({ number, selected }) => {
    return selected ? <h1>{number}</h1> : <h3>{number}</h3>;
  };
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
        <Number number={number} selected={number === 3} />
      ))}
    </>
  );
};

export default App;
