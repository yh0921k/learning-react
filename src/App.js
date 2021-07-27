import React from 'react';
import Home from './react-router/Home';
import { Link, Route } from 'react-router-dom';
import About from './react-router/About';
import Profile from './react-router/Profile';

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
          <Link to={'/profile/kyh'}>kyh profile</Link>
        </li>
        <li>
          <Link to={'/profile/pje'}>pje profile</Link>
        </li>
      </ul>
      <hr />
      <Route path={'/'} component={Home} exact={true} />
      <Route path={['/about', '/info']} component={About} />
      <Route path={'/profile/:username'} component={Profile} />
    </div>
  );
};

export default App;
