// @flow
import React from 'react';
import { connect } from 'react-redux';
import BlogList from '../components/BlogList';
import { removeBlog, fetchBlogInfo } from '../actions'
import { Actions } from 'react-native-router-flux';
import {
  AlertIOS
} from 'react-native'

const addNewBlog = (dispatch) => {
  AlertIOS.prompt(
    'Enter Blog URL',
    'Enter your blogger URL to be added to the reading list',
    [
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'OK', onPress: url => submitAddBlog(url,dispatch)},
    ]
  );
}

const submitAddBlog = (url: string, dispatch) => {
  let processUrl = url.replace('https://', '');
  processUrl = processUrl.replace('http://', '');
  processUrl = replaceAll(processUrl,'/', '');
  let regenUrl = 'http://'+processUrl+'/';

  dispatch(fetchBlogInfo(regenUrl));
}

const replaceAll = (str,search, replacement) => {
    return str.replace(new RegExp(search, 'g'), replacement);
}

const mapStateToProps = (store) => {
  return {
    blogs: store.blogState.blogs,
    isFetching: store.blogState.blogInfo.isFetching,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBlogPress: (id) => {
      Actions.postList({blogId:id})
    },
    onAddBlogPress: () => {
      addNewBlog(dispatch);
    },
    onRemoveBlogPress: (id) => {
      dispatch(removeBlog(id))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BlogList)
