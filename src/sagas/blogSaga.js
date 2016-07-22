//@flow
import { takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../api';

function* fetchBlogInfo( blogAction ) {
  try {
    const blog = yield call(api.fetchBlogInfo, blogAction.url);
    yield put({ type: actions.FETCH_BLOG_INFO_SUCCESS, blog });
  } catch (e) {
    yield put({ type: actions.FETCH_BLOG_INFO_FAIL, message: e.message });
  }
}

function* watchFetchBlogInfo() {
  yield* takeLatest(actions.FETCH_BLOG_INFO_REQUEST, fetchBlogInfo);
}

export default function* blogSaga(): any {
  yield [
    fork(watchFetchBlogInfo),
  ];
}
