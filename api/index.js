import express from 'express';
import { apolloExpress } from 'apollo-server';
import bodyParser from 'body-parser';
import 'babel-polyfill';

import { schema } from './schema';
import resolvers from './resolvers';

const GRAPHQL_PORT = 4000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/graphql', apolloExpress(() => ({
  graphiql: true,
  pretty: true,
  schema,
  resolvers
})));

app.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}`
));
