import { GET_RANDOM_NUMBER, GET_RANDOM_NUMBER_SUCCESS } from './constants';

const initialState = {
    number: 12345,
    errorMessage: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_RANDOM_NUMBER:
    return Object.assign({}, state, {
        number: action.val
    });
  case GET_RANDOM_NUMBER_SUCCESS:
    return Object.assign({}, state, {
        errorMessage: action.err
    });
  default:
    return state;
  }
};
export default reducer;