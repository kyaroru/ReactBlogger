// @flow
import React, {Component} from 'react'
import { connect } from 'react-redux'
import Blog from './Blog'
import AddBlog from '../containers/AddBlog'
import isEmpty from 'lodash/isEmpty'
import {
  View,
  StyleSheet,
} from 'react-native';

type Props = {
  onBlogPress: Function,
  blogs: Array<any>
};

export default ({ onBlogPress, blogs }: Props) => (
  <View style={styles.wrapper}>
    <View>
      {blogs.map(blog =>
        <Blog
          key={blog.blogId}
          {...blog}
          onPress={()=>onBlogPress(blog.blogId)}
        />
      )}
    </View>
    <AddBlog></AddBlog>
  </View>
)

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    flex: 1
  },
});
