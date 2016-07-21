import React from 'react';
import { connect } from 'react-redux';
import BlogList from '../components/BlogList';
import { addBlog, removeBlog } from '../actions'

const mapStateToProps = (store) => {
  return {
    blogs: store.blogState
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBlogPress: (id) => {
      dispatch(removeBlog(id))
    },
    onAddBlogPress: ()=> {
      addNewBlog();
    }
  }
}

const addNewBlog = () => {
  console.log('add new blog')
}

export default connect(mapStateToProps,mapDispatchToProps)(BlogList)
