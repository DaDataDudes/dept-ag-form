import { createStore, combineReducers, applyMiddleware } from 'redux';
import apolloClient from '/imports/client/apollo-client';
import createLogger from 'redux-logger';
const rootReducer = combineReducers({
 apollo: apolloClient.reducer()
});

const Store = createStore(rootReducer, {}, applyMiddleware(apolloClient.middleware(), createLogger()));

export default Store;