import React from 'react';
import { FormCont, ThankYou } from './containers/index';
import { Router, Route, browserHistory } from 'react-router';

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={FormCont} />
      <Route path='/thankyou' component={ThankYou} />
    </Router>
  );
};
