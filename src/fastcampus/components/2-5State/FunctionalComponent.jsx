import React, { useEffect, useState } from 'react';

const FunctionalComponent = () => {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const interval = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <h2>It is Functional Component {date.toLocaleTimeString()}.</h2>
    </div>
  );
};

export default FunctionalComponent;
