import { combineReducers } from 'redux';
import * as ducks from './ducks';

const blogArray = {
  // 3318750962623420514: {
  //   id: '3318750962623420514',
  //   name: 'Carol の 点点滴滴',
  //   url: 'http://blog.kyaroru.com/',
  // },
  // '2120328063286836889': {
  //   id: '2120328063286836889',
  //   name: 'Google on BlogSpot',
  //   url: 'http://google.blogspot.com/',
  // },
  // '4191548740220130749': {
  //   id: '4191548740220130749',
  //   name: 'The Firebase Blog',
  //   url: 'http://firebase.googleblog.com/',
  // },
  // '7159470537406093899': {
  //   id: '7159470537406093899',
  //   name: 'Angular',
  //   url: 'http://angularjs.blogspot.com/',
  // },
};

// const reduce = (array, reduceFunc, initValue) => {
//   let nextValue = initValue;
//   for (let i = 0; i < array.length; i++) {
//     const item = array[i];
//     nextValue = reduceFunc(nextValue, item, i);
//   }
//   return nextValue;
// };
//
// const blog = (action) => {
//   switch (action.type) {
//     case 'ADD_BLOG':
//       return {
//         id: action.blog.id,
//         name: action.blog.name,
//         url: action.blog.url,
//       };
//     default:
//       return {};
//   }
// };

const blogs = (blogList = blogArray, action) => {
  switch (action.type) {
    case ducks.INITIALIZE_BLOG_SUCCESS:
      return action.blogList;
    case ducks.ADD_BLOG:
      return {
        ...blogList,
        [action.blog.id]: {
          id: action.blog.id,
          name: action.blog.name,
          url: action.blog.url,
        },
      };
    case ducks.REMOVE_BLOG: {
      const newBlogList = Object.assign({}, blogList);
      const id = action.id;
      delete newBlogList[id];
      return newBlogList;
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

const deleteMode = (state = { isDeleteModeOn: false }, action) => {
  switch (action.type) {
    case ducks.TOGGLE_DELETE_MODE:
      return { isDeleteModeOn: !state.isDeleteModeOn };
    default:
      return state;
  }
};

export default combineReducers({
  blogs,
  blogInfo,
  prompt,
  deleteMode,
});
