// @flow
import React from 'react';
import { connect } from 'react-redux';
import BlogList from '../components/BlogList';
import { removeBlog } from '../actions'
import { Actions } from 'react-native-router-flux';

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
    onRemoveBlogPress: (id) => {
      dispatch(removeBlog(id))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BlogList)
