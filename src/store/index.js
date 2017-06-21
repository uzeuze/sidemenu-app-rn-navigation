import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import { createLogger } from 'redux-logger';
import reducers from '../reducers';

const logger = createLogger({
    predicate: () => process.env.NODE_ENV === 'development'
});

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk, logger),
    autoRehydrate()
  )
);

persistStore(store, { storage: AsyncStorage, whitelist: ['auth'] });

export default store;
