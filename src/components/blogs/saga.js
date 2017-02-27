// @flow
import { takeLatest } from 'redux-saga';
import { call, put, fork, select } from 'redux-saga/effects';
import * as ducks from './ducks';
import * as api from './api';
import isEmpty from 'lodash/isEmpty';
import { Alert } from 'react-native';
import I18n from '../../config/i18n';

function* checkIsBlogExist(blog) {
  const newBlogId = blog.id;
  console.log(blog);
  const existingBlog = yield select(ducks.getBlogById, newBlogId);
  if (!isEmpty(existingBlog)) {
    return true;
  }
  return false;
}

function* fetchBlogInfo(blogAction) {
  try {
    const blog = yield call(api.fetchBlogInfo, blogAction.url);
    if (typeof blog.error !== 'undefined') {
      yield put({ type: ducks.FETCH_BLOG_INFO_FAIL, message: blog.error.message });
      if (blog.error.message === 'Not Found') {
        Alert.alert(
          'Opps',
          'The blog is not found !',
          [
             { text: I18n.t('ok'), onPress: null },
          ],
        );
      }
    } else {
      yield put({ type: ducks.FETCH_BLOG_INFO_SUCCESS, blog });
      const isExist = yield checkIsBlogExist(blog);
      if (!isExist) {
        yield put({ type: ducks.ADD_BLOG, blog });
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
    yield put({ type: ducks.FETCH_BLOG_INFO_FAIL, message: e.message });
  }
}

function* watchFetchBlogInfo() {
  yield* takeLatest(ducks.FETCH_BLOG_INFO_REQUEST, fetchBlogInfo);
}

export default function* blogSaga(): any {
  yield [
    fork(watchFetchBlogInfo),
  ];
}
