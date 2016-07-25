//@flow
import { takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../api';

function* fetchPost( postAction ) {
  try {
    const posts = yield call(api.fetchPost, postAction.id);
    if(typeof posts.error !== 'undefined') {
      yield put({ type: actions.FETCH_POST_FAIL, message: posts.error.message });
    }
    else {
      yield put({ type: actions.FETCH_POST_SUCCESS, posts });
    }
  } catch (e) {
    yield put({ type: actions.FETCH_POST_FAIL, message: e.message });
  }
}

function* watchFetchPostInfo() {
  yield* takeLatest(actions.FETCH_POST_REQUEST, fetchPost);
}

export default function* postSaga(): any {
  yield [
    fork(watchFetchPostInfo),
  ];
}
