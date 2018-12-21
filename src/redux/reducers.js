import { combineReducers } from 'redux';
import AppNavigator from '../navigation/AppNavigator';
import homeReducer from '../containers/home/homeReducer';


const navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
};

const rootReducer = combineReducers({
    home: homeReducer,
    nav: navReducer,
});

export default rootReducer;
