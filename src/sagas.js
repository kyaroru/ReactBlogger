import { fork, spawn } from 'redux-saga/effects';
import blogs from './components/blogs';
import posts from './components/posts';
import comments from './components/comments';
import codePushSaga from 'react-native-code-push-saga';

export default function* root() {
  yield [
    fork(blogs.saga),
    fork(posts.saga),
    fork(comments.saga),
    yield spawn(codePushSaga),
  ];
}
