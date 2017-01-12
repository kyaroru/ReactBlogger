import * as ducks from './ducks';
import { combineReducers } from 'redux';

const blogArray:any = [
  // {
  //   id: '3318750962623420514',
  //   name: 'Carol の 点点滴滴',
  //   url: 'http://blog.kyaroru.com/',
  // },
  {
    id: '2120328063286836889',
    name: 'Google on BlogSpot',
    url: 'http://google.blogspot.com/',
  },
  {
    id: '4191548740220130749',
    name: 'The Firebase Blog',
    url: 'http://firebase.googleblog.com/',
  },
  {
    id: '7159470537406093899',
    name: 'Angular',
    url: 'http://angularjs.blogspot.com/',
  },
];

const blog = (item, action) => {
  switch (action.type) {
    case 'ADD_BLOG':
      return {
        id: action.blog.id,
        name: action.blog.name,
        url: action.blog.url,
      };
    default:
      return item;
  }
};

const blogs = (blogList : any = blogArray, action : any) => {
  switch (action.type) {
    case 'ADD_BLOG':
      return [
        ...blogList,
        blog(undefined, action),
      ];
    case 'REMOVE_BLOG': {
      const index = blogList.findIndex((x) => x.id === action.id);
      return [
        ...blogList.slice(0, index),
        ...blogList.slice(index + 1),
      ];
    }
    default:
      return blogList;
  }
};

const blogInfo = (state = { isFetching: false }, action) => {
  switch (action.type) {
    case ducks.FETCH_BLOG_INFO_REQUEST:
      return { isFetching: true };
    case ducks.FETCH_BLOG_INFO_SUCCESS:
      return { isFetching: false, blog: action.blog };
    case ducks.FETCH_BLOG_INFO_FAIL:
      return { isFetching: false, error: action.message };
    default:
      return state;
  }
};

const prompt = (state = { isShowPrompt: false, title: '', placeholder: '' }, action) => {
  switch (action.type) {
    case ducks.SHOW_PROMPT:
      return { isShowPrompt: true, title: action.title, placeholder: action.placeholder };
    case ducks.HIDE_PROMPT:
      return { isShowPrompt: false, title: '', placeholder: '' };
    default:
      return state;
  }
};

export default combineReducers({
  blogs,
  blogInfo,
  prompt,
});
