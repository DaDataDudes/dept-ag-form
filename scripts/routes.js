import React from 'react';
import { FormCont } from './containers/index';
import { Router, Route, browserHistory } from 'react-router';

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={FormCont} />
    </Router>
  );
};
