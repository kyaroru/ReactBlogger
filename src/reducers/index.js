// @flow
import { combineReducers } from 'redux'
import blogs from './blogs'

const reducers = combineReducers({
  blogState: blogs
})

export default reducers
