// @flow
import { combineReducers } from 'redux'
import blogs from './blogs'
import posts from './posts'

const reducers = combineReducers({
  blogState: blogs,
  postState: posts
})

export default reducers
