import React from 'react';
import NewsPage from './news-viewer/NewsPage';
import { Route } from 'react-router-dom';

const App = () => {
  return <Route path={'/:category?'} component={NewsPage} />;
};

export default App;
