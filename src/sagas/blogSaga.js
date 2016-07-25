//@flow
import { takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../api';

function* fetchBlogInfo( blogAction ) {
  try {
    const blog = yield call(api.fetchBlogInfo, blogAction.url);
    if(typeof blog.error !== 'undefined') {
      yield put({ type: actions.FETCH_BLOG_INFO_FAIL, message: blog.error.message });
    }
    else {
      yield put({ type: actions.FETCH_BLOG_INFO_SUCCESS, blog });
      yield put({ type: actions.ADD_BLOG, blog });
    }
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
