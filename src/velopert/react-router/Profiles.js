import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from './WithRouterSample';

const Profiles = () => {
  const activeStyle = {
    background: 'black',
    color: 'white',
  };

  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to={'/profiles/kyh'}>
            kyh profile
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to={'/profiles/pje'}>
            pje profile
          </NavLink>
        </li>
      </ul>

      <Route
        path={'/profiles'}
        exact
        render={() => <div>사용자를 선택해주세요.</div>}
      />
      <Route path={'/profiles/:username'} component={Profile} />
      <WithRouterSample />
    </div>
  );
};

export default Profiles;
