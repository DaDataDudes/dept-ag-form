import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import apolloClient from '/imports/client/apollo-client';
import createLogger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
 apollo: apolloClient.reducer(),
 form: formReducer
});

const middleware = [apolloClient.middleware(), createLogger()];

const enhancers = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension()
);

const Store = createStore(rootReducer, {}, enhancers);

export default Store;