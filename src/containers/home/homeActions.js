import {
    GET_RANDOM_NUMBER, GET_RANDOM_NUMBER_SUCCESS, GET_RANDOM_NUMBER_FALIURE,
  } from './constants';
  
export function getRandomNumber() {
    return {
        type: GET_RANDOM_NUMBER,
    };
}

export function getRandomNumberSuccess(val) {
    return {
        type: GET_RANDOM_NUMBER_SUCCESS,
        val
    };
}

export function getRandomNumberFaliure(err) {
    return {
        type: GET_RANDOM_NUMBER_FALIURE,
        err
    };
}
