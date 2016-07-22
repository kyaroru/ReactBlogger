import * as actions from '../actions'
import { combineReducers } from 'redux'

const blogArray:any = [
  {
    blogId: 1,
    title: 'Carol Blog',
    url: 'http://blog.kyaroru.com/'
  },
  {
    blogId: 2,
    title: 'AngularJs',
    url: 'http://angularjs.blogspot.my/'
  }
];

const blog = (item, action) => {
  switch (action.type) {
    case 'ADD_BLOG':
      return {
        blogId: action.blogId,
        title: action.blog.title,
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
      let index = blogList.findIndex((x) => x.blogId === action.blogId);
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
