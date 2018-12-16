// @flow
import axios from 'axios';
import api from 'config/bloggerAPI';

export const fetchComment = (blogId, postId) => {
  const url = `${api.domain}${blogId}/posts/${postId}/comments`;
  const params = {
    key: api.API_KEY,
  };
  return axios.get(url, { params })
    .then(response => response.data, error => error.response && error.response.data);
};
