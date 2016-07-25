import * as actions from '../actions'
import { combineReducers } from 'redux'

const posts = (state = {isFetching: false}, action) => {
  switch (action.type) {
    case actions.FETCH_POST_REQUEST:
      return { isFetching: true };
    case actions.FETCH_POST_SUCCESS:
      return { isFetching: false, items: action.posts.items, nextPageToken: action.posts.nextPageToken };
    case actions.FETCH_POST_FAIL:
      return { isFetching: false, error: action.message };
    default:
      return state;
  }
}

export default combineReducers({
  posts
});
