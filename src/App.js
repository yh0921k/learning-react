import React from 'react';

const App = () => {
  const Paint = ({ title, description, children }) => (
    <>
      <h1>{title}</h1>
      <h3>{description}</h3>
      {children}
    </>
  );
  return (
    <div>
      <Paint title={'Good'} description={'good'}>
        <h1>Children</h1>
      </Paint>
      <Paint title={'Bad'} description={'bad'}>
        Hello React
      </Paint>
    </div>
  );
};

export default App;
