import React from 'react';

function UserGreeting(props) {
  return (
    <h1>
      {props.name && props.name + ', '} Welcome{' '}
      {Boolean(props.count) &&
        `It's
      ${props.count} times`}
    </h1>
  );
}

function GuestGreeting(props) {
  return <h1>Please, sign up</h1>;
}

function Greeting(props) {
  // if (props.isLoggedIn) {
  //   return <UserGreeting name={'jimmy'} count={0} />;
  // }
  // return <GuestGreeting />;

  return props.isLoggedIn ? (
    <UserGreeting name={'Jimmy'} count={0} />
  ) : (
    <GuestGreeting />
  );
}

const Condition = () => {
  const isLoggedIn = true;
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default Condition;
