import React, { useEffect, useState } from 'react';
import './fastcampus/css/button.css';

const App = () => {
  const Button = ({ className = '', style, color, ...rest }) => {
    return (
      <button
        className={`button ${className}`}
        style={{ borderRadius: 8, backgroundColor: color, ...style }}
        {...rest}
      ></button>
    );
  };
  return (
    <>
      <Button style={{ borderRadius: '50%' }}>Green</Button>
      <Button color="blue">Blue</Button>
      <Button color="red">Red</Button>
      <Button color="gray">Gray</Button>
      <Button color="black">Black</Button>
    </>
  );
};

export default App;
