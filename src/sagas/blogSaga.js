// @flow
import { takeLatest } from 'redux-saga';
import { call, put, fork, select } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../api';
import isEmpty from 'lodash/isEmpty';
import { Alert } from 'react-native';
import I18n from '../config/i18n';

function* checkIsBlogExist(blog) {
  const newBlogId = blog.id;
  const existingBlog = yield select(actions.getBlogById, newBlogId);
  if (!isEmpty(existingBlog)) {
    return true;
  }
  return false;
}

function* fetchBlogInfo(blogAction) {
  try {
    const blog = yield call(api.fetchBlogInfo, blogAction.url);
    if (typeof blog.error !== 'undefined') {
      yield put({ type: actions.FETCH_BLOG_INFO_FAIL, message: blog.error.message });
    } else {
      yield put({ type: actions.FETCH_BLOG_INFO_SUCCESS, blog });
      const isExist = yield checkIsBlogExist(blog);
      if (!isExist) {
        yield put({ type: actions.ADD_BLOG, blog });
      } else {
        Alert.alert(
          'Blog Exist',
          'The Blog is Exist',
          [
             { text: I18n.t('ok'), onPress: null },
          ],
        );
      }
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
