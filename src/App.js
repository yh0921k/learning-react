import React, { useEffect, useState } from 'react';

const Id = ({ handleIdChange }) => {
  return (
    <>
      <label htmlFor={'id'}>ID: </label>
      <input onChange={handleIdChange} />
    </>
  );
};

const Password = ({ handlePasswordChange }) => {
  return (
    <>
      <label htmlFor={'password'}>PW: </label>
      <input onChange={handlePasswordChange} type={'password'} />
    </>
  );
};

const App = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleIdChange = (event) => {
    setId(event.target.value);
    console.log(id);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };

  const handleLoginClick = () => {
    console.log(`ID : ${id}, PW : ${password}`);
  };
  return (
    <>
      <form>
        <Id handleIdChange={handleIdChange} />
        <br />
        <Password handlePasswordChange={handlePasswordChange} />
        <button
          disabled={id.length > 0 && password.length > 0 ? false : true}
          onClick={handleLoginClick}
        >
          Login
        </button>
      </form>
    </>
  );
};

export default App;
