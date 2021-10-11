import React from 'react';

const App = () => {
  const paint = (title, description) => (
    <>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </>
  );
  return (
    <div>
      {paint('Good', 'good')}
      {paint('Bad', 'bad')}
    </div>
  );
};

export default App;
