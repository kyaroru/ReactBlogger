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
