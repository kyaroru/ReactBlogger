// @flow
import React, {Component} from 'react'
import { connect } from 'react-redux'
import Blog from './Blog'
import isEmpty from 'lodash/isEmpty'
import {
  View,
} from 'react-native';

type Props = {
  onBlogPress: Function,
  blogs: Array<any>
};

export default ({ onBlogPress, blogs }: Props) => (
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
