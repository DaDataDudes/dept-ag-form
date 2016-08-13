import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import client from './apollo-client';
import createLogger from 'redux-logger';
import formReducer from '../reducers/formReducer';
const rootReducer = combineReducers({
  apollo: client.reducer(),
  form: formReducer
});

const middleware = [client.middleware(), createLogger()];

const enhancers = compose(
  applyMiddleware(...middleware),
  (window.devToolsExtension && process.env.NODE_ENV !== 'production') ?
   window.devToolsExtension() : f => f
);

const Store = createStore(rootReducer, {}, enhancers);

export default Store;
