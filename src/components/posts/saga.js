// @flow
import { all, call, put, fork, takeLatest } from 'redux-saga/effects';
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
    if (postAction.nextPageToken) {
      const posts = yield call(api.fetchOlderPost, postAction.id, postAction.nextPageToken);
      if (typeof posts.error !== 'undefined') {
        yield put({ type: ducks.FETCH_OLDER_POST_FAIL, message: posts.error.message });
      } else {
        yield put({ type: ducks.FETCH_OLDER_POST_SUCCESS, posts });
      }
    }
  } catch (e) {
    yield put({ type: ducks.FETCH_OLDER_POST_FAIL, message: e.message });
  }
}

function* watchFetchPost() {
  yield takeLatest(ducks.FETCH_POST_REQUEST, fetchPost);
}

function* watchFetchOlderPost() {
  yield takeLatest(ducks.FETCH_OLDER_POST_REQUEST, fetchOlderPost);
}

export default function* postSaga() {
  yield all([
    fork(watchFetchPost),
    fork(watchFetchOlderPost),
  ]);
}
