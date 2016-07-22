// @flow
import React, {Component} from 'react'
import { connect } from 'react-redux'
import Blog from './Blog'
import BlogHeader from '../containers/BlogHeader'
import isEmpty from 'lodash/isEmpty'
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  ActivityIndicator
} from 'react-native';

type Props = {
  onBlogPress: Function,
  blogs: Array<any>,
  isFetching: bool,
};

export default ({ onBlogPress, blogs, isFetching }: Props) => (
  <View style={styles.container}>
    <BlogHeader title="Blogs" iconName="plus"></BlogHeader>
    <ActivityIndicator
      animating={!!isFetching}
      style={styles.centering}
      size="large"
    />
    <ScrollView>
      <View style={styles.content}>
        <View style={styles.wrapper}>
          <View>
            {blogs.map(blog =>
              <Blog
                key={blog.id}
                {...blog}
                onPress={()=>onBlogPress(blog.id)}
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
  centering: {
    position: 'absolute',
    top: 64,
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
  },
});
