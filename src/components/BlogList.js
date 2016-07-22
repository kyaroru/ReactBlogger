// @flow
import React, {Component} from 'react'
import { connect } from 'react-redux'
import Blog from './Blog'
import BlogHeader from '../containers/BlogHeader'
import isEmpty from 'lodash/isEmpty'
import {
  View,
  StyleSheet,
  ScrollView
} from 'react-native';

type Props = {
  onBlogPress: Function,
  blogs: Array<any>
};

export default ({ onBlogPress, blogs }: Props) => (
  <View style={styles.container}>
    <BlogHeader title="Blogs" iconName="plus"></BlogHeader>
    <ScrollView>
      <View style={styles.content}>
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
        </View>
      </View>
    </ScrollView>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  },
  content: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
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
