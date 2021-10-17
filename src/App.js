import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.co/techoi/raw-data-api/main/simple-api.json',
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  if (error != null) {
    return <p>{error}</p>;
  }
  if (data == null) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <p>People</p>
      {data.people.map((person) => (
        <div>
          <span>name: {person.name} </span>
          <span>age : {person.age}</span>
        </div>
      ))}
    </div>
  );
};

export default App;
