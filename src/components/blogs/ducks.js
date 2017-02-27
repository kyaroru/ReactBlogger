// @flow
export const NAME = 'BLOG';

export const REMOVE_BLOG = 'REMOVE_BLOG';
export const ADD_BLOG = 'ADD_BLOG';

export const TOGGLE_DELETE_MODE = 'TOGGLE_DELETE_MODE';

export const SHOW_PROMPT = 'SHOW_PROMPT';
export const HIDE_PROMPT = 'HIDE_PROMPT';

export const FETCH_BLOG_INFO_REQUEST = 'FETCH_BLOG_INFO_REQUEST';
export const FETCH_BLOG_INFO_SUCCESS = 'FETCH_BLOG_INFO_SUCCESS';
export const FETCH_BLOG_INFO_FAIL = 'FETCH_BLOG_INFO_FAIL';

export const getBlogById = (state, id) => {
  const blogs = state[NAME].blogs;
  const selectedBlog = blogs[id];
  return selectedBlog || {};
};

export const addBlog = (blog: Object) => ({
  type: ADD_BLOG,
  blog,
});

export const removeBlog = (id:string) => ({
  type: REMOVE_BLOG,
  id,
});

export const toggleDeleteMode = () => ({
  type: TOGGLE_DELETE_MODE,
});

export const showPrompt = (title: string, placeholder: string) => ({
  type: SHOW_PROMPT,
  title,
  placeholder,
});

export const hidePrompt = () => ({
  type: HIDE_PROMPT,
});

export const fetchBlogInfo = (url: string) => ({
  type: FETCH_BLOG_INFO_REQUEST,
  url,
});

export const fetchBlogInfoSuccess = (blog: any) => ({
  type: FETCH_BLOG_INFO_SUCCESS,
  blog,
});

export const fetchBlogInfoFail = (message: string) => ({
  type: FETCH_BLOG_INFO_FAIL,
  message,
});
