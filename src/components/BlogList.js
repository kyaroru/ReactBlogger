// @flow
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addBlog, removeBlog } from '../actions'
import Blog from './Blog'
import isEmpty from 'lodash/isEmpty'
import {
  View,
} from 'react-native';

type Props = {
  onBlogPress: any,
  blogs: Array<any>
};

const BlogList = ({ onBlogPress, blogs }: Props) => (
  <View>
    {blogs.map(blog =>
      <Blog
        key={blog.blogId}
        {...blog}
        onPress={()=>onBlogPress(blog.blogId)}
      />
    )}
  </View>
)

const mapStateToProps = (store) => {
  return {
    blogs: store.blogState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBlogPress: (id) => {
      dispatch(removeBlog(id))
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(BlogList)
