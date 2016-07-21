//@flow
import { takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../api';

function* fetchBlogInfo({ url: string }) {
  try {
    const blogInfo = yield call(api.fetchBlogInfo, url);
    yield put({ type: actions.FETCH_BLOG_INFO_SUCCESS, url, blogInfo });
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
