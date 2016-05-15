import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';
import Store from '/imports/client/store/store';
import { ApolloProvider } from 'react-apollo';
import apolloClient from '/imports/client/apollo-client';
import { Router, Route } from 'react-router';
import WelcomePage from '../imports/client/components/welcomePage';

Meteor.startup(() => {
  render(<ApolloProvider client={apolloClient} store={Store}>
    <Router>
      <Route path='/' component={WelcomePage} />
    </Router>
   </ApolloProvider>, document.getElementById('root'));
})