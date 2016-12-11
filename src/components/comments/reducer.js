import * as ducks from './ducks';
import { combineReducers } from 'redux';

const comments = (state = { isFetching: false }, action) => {
  switch (action.type) {
    case ducks.FETCH_COMMENT_REQUEST:
      return { isFetching: true };
    case ducks.FETCH_COMMENT_SUCCESS:
      return { isFetching: false, items: action.comments.items };
    case ducks.FETCH_COMMENT_FAIL:
      return { isFetching: false, error: action.message };
    default:
      return state;
  }
};

export default combineReducers({
  comments,
});
