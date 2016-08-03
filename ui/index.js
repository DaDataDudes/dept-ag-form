import React from 'react';
import { render } from 'react-dom';
import ApolloClient, { createNetworkInterface, addTypename } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, Route, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Store from 'ui/store/store';
import WelcomePage from 'ui/containers/welcomePage';
import FormPage from 'ui/containers/formPage';
import DashboardPage from 'ui/containers/dashboardPage';

// Initialization for Materiul-UI library.
injectTapEventPlugin();

const client = new ApolloClient({
  networkInterface: createNetworkInterface('/graphql', {
    credentials: 'same-origin'
  }),
  queryTransformer: addTypename,
  dataIdFromObject: (result) => {
    if (result.id && result.__typename) {
      return result.__typename + result.id;
    }
    return null;
  }
});

render((
  <ApolloProvider client={client} store={Store}>
    <Router history={browserHistory}>
      <Route path="/" component={WelcomePage} />
      <Route path="/form" component={FormPage} />
      <Route path="/dashboard" component={DashboardPage} />
    </Router>
  </ApolloProvider>
), document.getElementById('root'));
