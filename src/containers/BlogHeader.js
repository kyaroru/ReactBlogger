// @flow
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { addBlog, fetchBlogInfo } from '../actions'
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
  fetchBlogInfo(url);
  let blog = {
    url: url,
    title: 'New Blog'
  }
  dispatch(addBlog(blog))

}

const mapStateToProps = (store) => {
  return {
    blogs: store.blogState.blogs,
    isFetching: store.blogState.blogInfo.isFetching,
    blog: store.blogState.blogInfo.blog
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIconPress: ()=> {
      addNewBlog(dispatch);
    },
    fetchBlogInfo: (url)=> {
      dispatch(fetchBlogInfo(url))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)
