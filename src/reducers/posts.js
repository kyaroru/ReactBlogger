import * as actions from '../actions'
import { combineReducers } from 'redux'

const data = (state = {isFetching: false}, action) => {
  switch (action.type) {
    case actions.FETCH_POST_REQUEST:
      return { isFetching: true };
    case actions.FETCH_POST_SUCCESS:
      return { isFetching: false, posts: action.data.items, nextPageToken: action.data.nextPageToken };
    case actions.FETCH_POST_FAIL:
      return { isFetching: false, error: action.message };
    default:
      return state;
  }
}

export default combineReducers({
  data
});
