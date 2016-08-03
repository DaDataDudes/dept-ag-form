import ApolloClient, { createNetworkInterface, addTypename } from 'apollo-client';

const client = new ApolloClient({
  networkInterface: createNetworkInterface('/graphql', {
    credentials: 'same-origin'
  }),
  queryTransformer: addTypename,
  dataIdFromObject: (result) => {
    if (result.id && result.__typename) { // eslint-disable-line no-underscore-dangle
      return result.__typename + result.id; // eslint-disable-line no-underscore-dangle
    }
    return null;
  }
});

export default client;
