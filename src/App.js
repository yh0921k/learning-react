import React from 'react';

const App = () => {
  const onClick = () => {
    import('./code-splitting/notify').then((result) => result.default());
  };

  return (
    <div className={'App'}>
      <header className={'App-header'}>
        <p onClick={onClick}>Hello React</p>
      </header>
    </div>
  );
};

export default App;
