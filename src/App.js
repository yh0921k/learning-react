import React, { useEffect, useRef, useState } from 'react';

const App = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.dir(event.target.elements);
    alert(event.target[0].value + ' ' + event.target[1].value);
    //alert(`${event.target.elements[0].value} ${event.elements[1].value}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First name:</label>
        <br />
        <input type="text" id="fname" name="fname" defaultValue="John" />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input type="text" id="lname" name="lname" defaultValue="Doe" />
        <br />
        <br />
        <input type="submit" defaultValue="Submit" />
      </form>
    </>
  );
};

export default App;
