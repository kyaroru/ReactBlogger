import React from 'react';
import { connect } from 'react-redux';
import BlogList from '../components/BlogList';
import { addBlog, removeBlog } from '../actions'

const mapStateToProps = function(store) {
  return {
    blogs: store.blogState
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
