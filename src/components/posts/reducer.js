import * as ducks from './ducks';
import { combineReducers } from 'redux';

const posts = (state = { isFetching: false }, action) => {
  switch (action.type) {
    case ducks.FETCH_POST_REQUEST:
      return { isFetching: true };
    case ducks.FETCH_OLDER_POST_REQUEST:
      return { isFetching: true };
    case ducks.FETCH_POST_SUCCESS:
      return { isFetching: false, items: action.posts.items, nextPageToken: action.posts.nextPageToken };
    case ducks.FETCH_POST_FAIL:
      return { isFetching: false, error: action.message };
    default:
      return state;
  }
};

export default combineReducers({
  posts,
});
