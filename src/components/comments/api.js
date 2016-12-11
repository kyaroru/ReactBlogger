// @flow
import axios from 'axios';
import api from '../../config/bloggerAPI';

export const fetchComment = (blogId: string, postId: string) => {
  const url = `${api.domain}${blogId}/posts/${postId}/comments`;
  const params = {
    key: api.API_KEY,
  };
  return axios.get(url, { params })
    .then((response) => response.data, (response) => response.data);
};
