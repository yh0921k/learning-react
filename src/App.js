import React from 'react';
import Home from './react-router/Home';
import { Link, Route } from 'react-router-dom';
import About from './react-router/About';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
      </ul>
      <hr />
      <Route path={'/'} component={Home} exact={true} />
      <Route path={'/about'} component={About} />
    </div>
  );
};

export default App;
