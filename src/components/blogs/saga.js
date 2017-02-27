// @flow
import { takeLatest } from 'redux-saga';
import { call, put, fork, select } from 'redux-saga/effects';
import * as ducks from './ducks';
import * as api from './api';
import isEmpty from 'lodash/isEmpty';
import { AsyncStorage } from 'react-native';
import { alert } from '../../utils/alert';

function* initializeBlog() {
  try {
    const blogList = yield AsyncStorage.getItem('blogList');
    if (blogList !== null) {
      const blogListJSON = JSON.parse(blogList);
      yield put(ducks.initializeBlogSuccess(blogListJSON));
    }
  } catch (e) {
    console.log(e);
  }
}

function* watchInitializeBlog() {
  yield* takeLatest(ducks.INITIALIZE_BLOG, initializeBlog);
}

function* checkIsBlogExist(blog) {
  const newBlogId = blog.id;
  // console.log(blog);
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
        alert('Opps', 'The blog is not found !');
      }
    } else {
      yield put({ type: ducks.FETCH_BLOG_INFO_SUCCESS, blog });
      const isExist = yield checkIsBlogExist(blog);
      if (!isExist) {
        yield put({ type: ducks.ADD_BLOG, blog });
      } else {
        alert('Opps', 'The Blog is Exist');
      }
    }
  } catch (e) {
    yield put({ type: ducks.FETCH_BLOG_INFO_FAIL, message: e.message });
  }
}

function* watchFetchBlogInfo() {
  yield* takeLatest(ducks.FETCH_BLOG_INFO_REQUEST, fetchBlogInfo);
}

function* updateBlogList() {
  try {
    const blogList = yield select(ducks.getBlogList);
    const blogListJSONString = JSON.stringify(blogList);
    yield AsyncStorage.setItem('blogList', blogListJSONString);
    // console.log(`New blog list: ${blogListJSONString}`);
  } catch (e) {
    console.log(e);
  }
}

function* watchAddBlog() {
  yield* takeLatest(ducks.ADD_BLOG, updateBlogList);
}

function* watchRemoveBlog() {
  yield* takeLatest(ducks.REMOVE_BLOG, updateBlogList);
}

export default function* blogSaga(): any {
  yield [
    fork(watchInitializeBlog),
    fork(watchFetchBlogInfo),
    fork(watchAddBlog),
    fork(watchRemoveBlog),
  ];
}
