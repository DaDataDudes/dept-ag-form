import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';
import Store from 'imports/client/store/store';
import { ApolloProvider } from 'react-apollo';
import apolloClient from 'imports/client/apollo-client';
import { Router, Route, browserHistory } from 'react-router';
import WelcomePage from 'imports/client/containers/welcomePage';
import FormPage from 'imports/client/containers/formPage';
import DashboardPage from 'imports/client/containers/dashboardPage';

Meteor.startup(() => {
  render(<ApolloProvider client={apolloClient} store={Store}>
    <Router history={browserHistory}>
      <Route path="/" component={WelcomePage} />
      <Route path="/form" component={FormPage} />
      <Route path="/dashboard" component={DashboardPage} />
    </Router>
  </ApolloProvider>, document.getElementById('root'));
});

