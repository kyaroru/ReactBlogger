// @flow
let nextBlogId = 3

export const REMOVE_BLOG = `REMOVE_BLOG`;
export const ADD_BLOG = `ADD_BLOG`;


export const FETCH_BLOG_INFO_REQUEST = `FETCH_BLOG_INFO_REQUEST`;
export const FETCH_BLOG_INFO_SUCCESS = `FETCH_BLOG_INFO_SUCCESS`;
export const FETCH_BLOG_INFO_FAIL = `FETCH_BLOG_INFO_FAIL`;

export const addBlog = (blog:Object) => {
  return {
    type: ADD_BLOG,
    blogId: nextBlogId++,
    blog
  }
}

export const removeBlog = (blogId:string) => {
  return {
    type: REMOVE_BLOG,
    blogId
  }
}

export const fetchBlogInfo = (url: string) => ({
  type: FETCH_BLOG_INFO_REQUEST,
  url
});

export const fetchBlogInfoSuccess = (blog: any) => ({
  type: FETCH_BLOG_INFO_SUCCESS,
  blog
});

export const fetchBlogInfoFail = (message: string) => ({
  type: FETCH_BLOG_INFO_FAIL,
  message
});
