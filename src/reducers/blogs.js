import * as actions from '../actions'
import { combineReducers } from 'redux'

const blogArray:any = [
  {
    id: 1,
    name: 'Carol Blog',
    url: 'http://blog.kyaroru.com/'
  },
  {
    id: 2,
    name: 'AngularJs',
    url: 'http://angularjs.blogspot.my/'
  }
];

const blog = (item, action) => {
  switch (action.type) {
    case 'ADD_BLOG':
      return {
        id: action.blog.id,
        name: action.blog.name,
        url: action.blog.url
      }
    default:
      return item
  }
}

const blogs = (blogList : any = blogArray, action : any) => {
  switch (action.type) {
    case 'ADD_BLOG':
      return [
        ...blogList,
        blog(undefined, action)
      ]
    case 'REMOVE_BLOG':
      let index = blogList.findIndex((x) => x.id === action.id);
      return [
        ...blogList.slice(0, index),
        ...blogList.slice(index + 1)
      ]
    default:
      return blogList
  }
}

const blogInfo = (state = {isFetching: false}, action) => {
  switch (action.type) {
    case actions.FETCH_BLOG_INFO_REQUEST:
      return { isFetching: true };
    case actions.FETCH_BLOG_INFO_SUCCESS:
      return { isFetching: false, blog: action.blog };
    case actions.FETCH_BLOG_INFO_FAIL:
      return { isFetching: false, error: action.message };
    default:
      return state;
  }
}

export default combineReducers({
  blogs,
  blogInfo,
});
