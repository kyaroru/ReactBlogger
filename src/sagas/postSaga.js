// @flow
import { takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../api';

function* fetchPost(postAction) {
  try {
    const posts = yield call(api.fetchPost, postAction.id);
    if (typeof posts.error !== 'undefined') {
      yield put({ type: actions.FETCH_POST_FAIL, message: posts.error.message });
    } else {
      yield put({ type: actions.FETCH_POST_SUCCESS, posts });
    }
  } catch (e) {
    yield put({ type: actions.FETCH_POST_FAIL, message: e.message });
  }
}

function* fetchOlderPost(postAction) {
  try {
    const posts = yield call(api.fetchPost, postAction.id, postAction.nextPageToken);
    if (typeof posts.error !== 'undefined') {
      yield put({ type: actions.FETCH_POST_FAIL, message: posts.error.message });
    } else {
      yield put({ type: actions.FETCH_POST_SUCCESS, posts });
    }
  } catch (e) {
    yield put({ type: actions.FETCH_POST_FAIL, message: e.message });
  }
}

function* fetchComment(commentAction) {
  try {
    const comments = yield call(api.fetchComment, commentAction.blogId, commentAction.postId);
    if (typeof comments.error !== 'undefined') {
      yield put({ type: actions.FETCH_COMMENT_FAIL, message: comments.error.message });
    } else {
      yield put({ type: actions.FETCH_COMMENT_SUCCESS, comments });
    }
  } catch (e) {
    yield put({ type: actions.FETCH_COMMENT_FAIL, message: e.message });
  }
}

function* watchFetchPost() {
  yield* takeLatest(actions.FETCH_POST_REQUEST, fetchPost);
}

function* watchFetchOlderPost() {
  yield* takeLatest(actions.FETCH_OLDER_POST_REQUEST, fetchOlderPost);
}


function* watchFetchComment() {
  yield* takeLatest(actions.FETCH_COMMENT_REQUEST, fetchComment);
}

export default function* postSaga(): any {
  yield [
    fork(watchFetchPost),
    fork(watchFetchOlderPost),
    fork(watchFetchComment),
  ];
}
