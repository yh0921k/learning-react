import React from 'react';

const IterationSample = () => {
  const names = ['A1', 'A2', 'A3', 'A4'];
  const nameList = names.map((name) => <li>{name}</li>);

  return (
    <div>
      <ul>{nameList}</ul>
    </div>
  );
};

export default IterationSample;
