import { all } from 'redux-saga/effects';
import homeSagas from '../containers/home/homeSaga';

export default function* rootSaga() {
  yield all([
    homeSagas()
  ]);
}
