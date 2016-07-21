//@flow
import { fork } from 'redux-saga/effects';
import blogSaga from './blogSaga';

export default function* root() : any {
  yield [
    fork(blogSaga),
  ];
}
