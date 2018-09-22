import { combineReducers } from 'redux';
import homeReducer from '../containers/home/homeReducer';

const rootReducer = combineReducers({
    home: homeReducer
});

export default rootReducer;

