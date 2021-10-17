import React, { useEffect, useRef, useState } from 'react';

const App = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.dir(event.target.elements);
    alert(
      `${event.target.elements.fname.value} ${event.target.elements.cars.value}`,
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First name:</label>
        <br />
        <input type="text" id="fname" name="fname" defaultValue="John" />
        <br />
        <label htmlFor="cars">Choose a car:</label>
        <select id="cars" name="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
        <input type="submit" defaultValue="Submit" />
      </form>
    </>
  );
};

export default App;
