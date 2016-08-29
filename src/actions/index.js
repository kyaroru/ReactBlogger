// @flow
export const REMOVE_BLOG = `REMOVE_BLOG`;
export const ADD_BLOG = `ADD_BLOG`;

export const SHOW_PROMPT = 'SHOW_PROMPT';
export const HIDE_PROMPT = 'HIDE_PROMPT';

export const FETCH_BLOG_INFO_REQUEST = `FETCH_BLOG_INFO_REQUEST`;
export const FETCH_BLOG_INFO_SUCCESS = `FETCH_BLOG_INFO_SUCCESS`;
export const FETCH_BLOG_INFO_FAIL = `FETCH_BLOG_INFO_FAIL`;

export const FETCH_POST_REQUEST = `FETCH_POST_REQUEST`;
export const FETCH_POST_SUCCESS = `FETCH_POST_SUCCESS`;
export const FETCH_POST_FAIL = `FETCH_POST_FAIL`;

export const FETCH_COMMENT_REQUEST = `FETCH_COMMENT_REQUEST`;
export const FETCH_COMMENT_SUCCESS = `FETCH_COMMENT_SUCCESS`;
export const FETCH_COMMENT_FAIL = `FETCH_COMMENT_FAIL`;

export const addBlog = (blog:Object) => {
  return {
    type: ADD_BLOG,
    blog
  }
}

export const removeBlog = (id:string) => {
  return {
    type: REMOVE_BLOG,
    id
  }
}

export const showPrompt = (title: string, placeholder: string) => {
  return {
    type: SHOW_PROMPT,
    title,
    placeholder,
  }
}

export const hidePrompt = () => {
  return {
    type: HIDE_PROMPT,
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

export const fetchPost = (id: string) => ({
  type: FETCH_POST_REQUEST,
  id
});

export const fetchPostSuccess = (posts: any) => ({
  type: FETCH_POST_SUCCESS,
  posts
});

export const fetchPostFail = (message: string) => ({
  type: FETCH_POST_FAIL,
  message
});

export const fetchComment = (blogId: string, postId: string) => ({
  type: FETCH_COMMENT_REQUEST,
  blogId,
  postId,
});

export const fetchCommentSuccess = (comments: any) => ({
  type: FETCH_COMMENT_SUCCESS,
  comments
});

export const fetchCommentFail = (message: string) => ({
  type: FETCH_COMMENT_FAIL,
  message
});
