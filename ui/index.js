import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { Router, Route, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Store from 'ui/store/store';
import client from 'ui/store/apollo-client';
import WelcomePage from 'ui/containers/welcomePage';
import FormPage from 'ui/containers/formPage';
import DashboardPage from 'ui/containers/dashboardPage';

// Initialization for Materiul-UI library.
injectTapEventPlugin();

render((
  <ApolloProvider client={client} store={Store}>
    <Router history={browserHistory}>
      <Route path="/" component={WelcomePage} />
      <Route path="/form" component={FormPage} />
      <Route path="/dashboard" component={DashboardPage} />
    </Router>
  </ApolloProvider>
), document.getElementById('root'));
