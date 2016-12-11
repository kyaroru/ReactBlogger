import { combineReducers } from 'redux';
import blogs from './components/blogs';
import posts from './components/posts';
import comments from './components/comments';

const createReducers = (reducers = {}) => combineReducers({
  [blogs.ducks.NAME]: blogs.reducer,
  [posts.ducks.NAME]: posts.reducer,
  [comments.ducks.NAME]: comments.reducer,
  ...reducers,
});

export default createReducers;
