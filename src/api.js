//@flow
import axios from 'axios';
import config from './config'

export const fetchBlogInfo = (blogUrl: string) => {
  const url = config.domain + 'byurl';
  const params = {
    url: blogUrl,
    view: 'READER',
    key: config.API_KEY,
  };
  return axios.get(url,{params:params})
  .then((response)=>{
    // console.log(response);
    return response.data;
  },(response)=>{
    return response.data;
  })
};

export const fetchPost = (id: string) => {
  const url = config.domain + id + '/posts';
  const params = {
    key: config.API_KEY,
  };
  return axios.get(url,{params:params})
  .then((response)=>{
    // console.log(response);
    return response.data;
  },(response)=>{
    return response.data;
  })
};

export const fetchOlderPost = (id: string, token: string) => {
  const url = config.domain + id + '/posts';
  const params = {
    pageToken:token,
    key: config.API_KEY,
  };
  return axios.get(url,{params:params})
  .then((response)=>{
    // console.log(response);
    return response.data;
  },(response)=>{
    return response.data;
  })
};
