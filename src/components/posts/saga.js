// @flow
import { takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import * as ducks from './ducks';
import * as api from './api';

function* fetchPost(postAction) {
  try {
    const posts = yield call(api.fetchPost, postAction.id);
    if (typeof posts.error !== 'undefined') {
      yield put({ type: ducks.FETCH_POST_FAIL, message: posts.error.message });
    } else {
      yield put({ type: ducks.FETCH_POST_SUCCESS, posts });
    }
  } catch (e) {
    yield put({ type: ducks.FETCH_POST_FAIL, message: e.message });
  }
}

function* fetchOlderPost(postAction) {
  try {
    const posts = yield call(api.fetchPost, postAction.id, postAction.nextPageToken);
    if (typeof posts.error !== 'undefined') {
      yield put({ type: ducks.FETCH_POST_FAIL, message: posts.error.message });
    } else {
      yield put({ type: ducks.FETCH_POST_SUCCESS, posts });
    }
  } catch (e) {
    yield put({ type: ducks.FETCH_POST_FAIL, message: e.message });
  }
}

function* watchFetchPost() {
  yield* takeLatest(ducks.FETCH_POST_REQUEST, fetchPost);
}

function* watchFetchOlderPost() {
  yield* takeLatest(ducks.FETCH_OLDER_POST_REQUEST, fetchOlderPost);
}

export default function* postSaga(): any {
  yield [
    fork(watchFetchPost),
    fork(watchFetchOlderPost),
  ];
}
