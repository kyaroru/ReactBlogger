// @flow
import axios from 'axios';
import api from './config/bloggerAPI';

export const fetchBlogInfo = (blogUrl: string) => {
  const url = `${api.domain}byurl`;
  const params = {
    url: blogUrl,
    view: 'READER',
    key: api.API_KEY,
  };
  return axios.get(url, { params })
    .then((response) => response.data, (response) => response.data);
};

export const fetchPost = (id: string) => {
  const url = `${api.domain}${id}/posts`;
  const params = {
    key: api.API_KEY,
  };
  return axios.get(url, { params })
    .then((response) => response.data, (response) => response.data);
};

export const fetchOlderPost = (id: string, token: string) => {
  const url = `${api.domain}${id}/posts`;
  const params = {
    pageToken: token,
    key: api.API_KEY,
  };
  return axios.get(url, { params })
    .then((response) => response.data, (response) => response.data);
};

export const fetchComment = (blogId: string, postId: string) => {
  const url = `${api.domain}${blogId}/posts/${postId}/comments`;
  const params = {
    key: api.API_KEY,
  };
  return axios.get(url, { params })
    .then((response) => response.data, (response) => response.data);
};
