import React from 'react';
import { take, put, call, fork } from 'redux-saga/effects';
import { GET_RANDOM_NUMBER } from './constants';
import { getRandomNumberSuccess, getRandomNumberFaliure } from './homeActions';


function getRandomNumber() {
  return new Promise((resolve) => {
    setTimeout(() => {
        resolve(Math.floor(Math.random() * Math.floor(5)));
    }, 1000);
  });
}

function* watchGetRandomNumberRequest() {
  while (true) {
     yield take(GET_RANDOM_NUMBER);
    try {
      const response = yield call(getRandomNumber);
      yield put(getRandomNumberSuccess(response));
      console.log('Random number Success: ', response);
    } catch (err) {
      console.log('Random number ERROR: ', err);
      yield put(getRandomNumberFaliure(err));
    }
  }
}


export default function* root() {
  yield fork(watchGetRandomNumberRequest);
}
