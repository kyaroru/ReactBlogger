// @flow
import React from 'react';
import { connect } from 'react-redux';
import BlogList from '../components/BlogList';
import { removeBlog } from '../actions'

const mapStateToProps = (store) => {
  return {
    blogs: store.blogState.blogs
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBlogPress: (id) => {
      dispatch(removeBlog(id))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BlogList)
