// @flow
import { all, call, put, fork, takeLatest } from 'redux-saga/effects';
import * as ducks from './ducks';
import * as api from './api';

function* fetchComment(commentAction) {
  try {
    const comments = yield call(api.fetchComment, commentAction.blogId, commentAction.postId);
    if (typeof comments.error !== 'undefined') {
      yield put({ type: ducks.FETCH_COMMENT_FAIL, message: comments.error.message });
    } else {
      yield put({ type: ducks.FETCH_COMMENT_SUCCESS, comments });
    }
  } catch (e) {
    yield put({ type: ducks.FETCH_COMMENT_FAIL, message: e.message });
  }
}

function* watchFetchComment() {
  yield takeLatest(ducks.FETCH_COMMENT_REQUEST, fetchComment);
}

export default function* postSaga() {
  yield all([
    fork(watchFetchComment),
  ]);
}
