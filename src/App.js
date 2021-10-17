import React, { useEffect, useRef, useState } from 'react';

const App = () => {
  const [message, setMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(phoneNumber);
  };

  const handleChange = (event) => {
    if (event.target.value.startsWith(0)) {
      setMessage('Phone Number is valid');
      setPhoneNumber(event.target.value);
    } else if (event.target.value.length === 0) {
      setPhoneNumber('');
      setMessage('');
    } else {
      setPhoneNumber('');
      setMessage('Phone Number should starts with 0');
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor={'phone'}>Phone Number: </label>
        <br />
        <input
          id={'phone'}
          name={'phone'}
          onChange={handleChange}
          value={phoneNumber}
        />
        <p>{message}</p>
        <br />
        <br />
        <button
          type={'submit'}
          disabled={
            phoneNumber.length === 0 || message !== 'Phone Number is valid'
          }
        >
          Submit
        </button>
        <p>{phoneNumber}</p>
      </form>
    </>
  );
};

export default App;
