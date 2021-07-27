import React from 'react';
import Home from './react-router/Home';
import { Link, Route } from 'react-router-dom';
import About from './react-router/About';
import Profiles from './react-router/Profiles';

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
        <li>
          <Link to={'/profiles'}>Profile</Link>
        </li>
      </ul>
      <hr />
      <Route path={'/'} component={Home} exact={true} />
      <Route path={['/about', '/info']} component={About} />
      <Route path={'/profiles'} component={Profiles} />
    </div>
  );
};

export default App;
