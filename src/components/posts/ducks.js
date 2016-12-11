// @flow
export const NAME = 'POST';

export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAIL = 'FETCH_POST_FAIL';

export const FETCH_OLDER_POST_REQUEST = 'FETCH_OLDER_POST_REQUEST';
export const FETCH_OLDER_POST_SUCCESS = 'FETCH_OLDER_POST_SUCCESS';
export const FETCH_OLDER_POST_FAIL = 'FETCH_OLDER_POST_FAIL';

export const fetchPost = (id: string) => ({
  type: FETCH_POST_REQUEST,
  id,
});

export const fetchPostSuccess = (posts: any) => ({
  type: FETCH_POST_SUCCESS,
  posts,
});

export const fetchPostFail = (message: string) => ({
  type: FETCH_POST_FAIL,
  message,
});

export const fetchOlderPost = (id: string, nextPageToken: string) => ({
  type: FETCH_OLDER_POST_REQUEST,
  id,
  nextPageToken,
});

export const fetchOlderPostSuccess = (posts: any) => ({
  type: FETCH_POST_SUCCESS,
  posts,
});

export const fetchOlderPostFail = (message: string) => ({
  type: FETCH_POST_FAIL,
  message,
});
