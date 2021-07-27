import React from 'react';
import Home from './react-router/Home';
import { Link, Route } from 'react-router-dom';
import About from './react-router/About';
import Profiles from './react-router/Profiles';
import HistorySample from './react-router/HistorySample';

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
        <li>
          <Link to={'/history'}>History</Link>
        </li>
      </ul>
      <hr />
      <Route path={'/'} component={Home} exact={true} />
      <Route path={['/about', '/info']} component={About} />
      <Route path={'/profiles'} component={Profiles} />
      <Route path={'/history'} component={HistorySample} />
    </div>
  );
};

export default App;
