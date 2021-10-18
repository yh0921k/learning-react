import React from 'react';

const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>;
};
const Composition = () => {
  return (
    <div>
      <Welcome name={'Jimmy'} />
      <Welcome name={'Jimmy'} />
      <Welcome name={'Jimmy'} />
      <Welcome name={'Jimmy'} />
    </div>
  );
};

export default Composition;
