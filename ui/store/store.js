import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import client from './apollo-client';
import createLogger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
  apollo: client.reducer(),
  form: formReducer
});

const middleware = [client.middleware(), createLogger()];

const enhancers = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension()
);

const Store = createStore(rootReducer, {}, enhancers);

export default Store;
