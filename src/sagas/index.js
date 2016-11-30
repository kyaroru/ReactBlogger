// @flow
import { fork } from 'redux-saga/effects';
import blogSaga from './blogSaga';
import postSaga from './postSaga';


export default function* root() : any {
  yield [
    fork(blogSaga),
    fork(postSaga),
  ];
}
