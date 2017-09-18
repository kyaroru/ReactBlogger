import { all, fork, spawn } from 'redux-saga/effects';
import codePushSaga from 'react-native-code-push-saga';
import blogs from './components/blogs';
import posts from './components/posts';
import comments from './components/comments';

export default function* root() {
  yield all([
    fork(blogs.saga),
    fork(posts.saga),
    fork(comments.saga),
    yield spawn(codePushSaga),
  ]);
}
