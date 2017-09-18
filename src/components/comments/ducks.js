// @flow
export const NAME = 'COMMENT';

export const FETCH_COMMENT_REQUEST = 'FETCH_COMMENT_REQUEST';
export const FETCH_COMMENT_SUCCESS = 'FETCH_COMMENT_SUCCESS';
export const FETCH_COMMENT_FAIL = 'FETCH_COMMENT_FAIL';

export const fetchComment = (blogId, postId) => ({
  type: FETCH_COMMENT_REQUEST,
  blogId,
  postId,
});

export const fetchCommentSuccess = comments => ({
  type: FETCH_COMMENT_SUCCESS,
  comments,
});

export const fetchCommentFail = message => ({
  type: FETCH_COMMENT_FAIL,
  message,
});
