import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import sagas from '../redux/sagas';
import reducers from '../redux/reducers';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
const logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
  diff: true,
});

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//   const store = createStore(
//       applyMiddleware(
//         sagaMiddleware,
//         logger,
//       )
//   );

  const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware, logger),
  );

  if (isDebuggingInChrome) {
    window.store = store;
  }
  sagaMiddleware.run(sagas);

  return store;
}
