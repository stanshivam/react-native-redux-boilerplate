import {
    createReactNavigationReduxMiddleware,
    reduxifyNavigator,
  } from 'react-navigation-redux-helpers';
  import AppNavigator from './AppNavigator';
  
  const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav,
  );
  const ReduxAppNavigator = reduxifyNavigator(AppNavigator, "root");
  
  export {
    middleware,
    ReduxAppNavigator,
  };
