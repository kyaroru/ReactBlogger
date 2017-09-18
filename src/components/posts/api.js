// @flow
import axios from 'axios';
import api from '../../config/bloggerAPI';

export const fetchPost = (id) => {
  const url = `${api.domain}${id}/posts`;
  const params = {
    key: api.API_KEY,
  };
  return axios.get(url, { params })
    .then(response => response.data, error => error.response && error.response.data);
};

export const fetchOlderPost = (id, token) => {
  const url = `${api.domain}${id}/posts`;
  const params = {
    pageToken: token,
    key: api.API_KEY,
  };
  return axios.get(url, { params })
    .then(response => response.data, error => error.response && error.response.data);
};
