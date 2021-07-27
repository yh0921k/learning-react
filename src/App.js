import React from 'react';
import Home from './react-router/Home';
import { Route } from 'react-router-dom';
import About from './react-router/About';

const App = () => {
  return (
    <div>
      <Route path={'/'} component={Home} exact={true} />
      <Route path={'/about'} component={About} />
    </div>
  );
};

export default App;
