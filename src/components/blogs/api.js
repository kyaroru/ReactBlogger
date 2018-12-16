// @flow
import axios from 'axios';
import api from 'config/bloggerAPI';

export const fetchBlogInfo = (blogUrl) => {
  const url = `${api.domain}byurl`;
  const params = {
    url: blogUrl,
    view: 'READER',
    key: api.API_KEY,
  };
  return axios.get(url, { params })
    .then(response => response.data, error => error.response && error.response.data);
};
