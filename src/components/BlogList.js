// @flow
import React, {Component} from 'react'
import { connect } from 'react-redux'
import Blog from './Blog'
// import AddBlog from '../containers/AddBlog'
import isEmpty from 'lodash/isEmpty'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';

type Props = {
  onAddBlogPress: Function,
  onBlogPress: Function,
  blogs: Array<any>
};

export default ({ onAddBlogPress, onBlogPress, blogs }: Props) => (
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
    <TouchableOpacity onPress={()=>onAddBlogPress()} style={styles.itemNew}>
      <View>
        <Text style={{color:'#8C07EB'}}>Add new blog</Text>
      </View>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    flex: 1
  },
  itemNew: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
    borderWidth: 1,
    borderColor: '#eee'
  }
});
