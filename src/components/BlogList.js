// @flow
import React, {Component} from 'react'
import { connect } from 'react-redux'
import Blog from './Blog'
import BlogHeader from '../containers/BlogHeader'
import isEmpty from 'lodash/isEmpty'
import Prompt from 'react-native-prompt'
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';

type Props = {
  onAddBlogPress: Function,
  onSubmitAddBlog: Function,
  onBlogPress: Function,
  onCancelPrompt: Function,
  blogs: Array<any>,
  isFetching: bool,
  isShowPrompt: bool,
  promptTitle: string,
  promptPlaceholder: string,
};

export default ({ onBlogPress, onAddBlogPress, blogs, isFetching, promptTitle, promptPlaceholder,
   isShowPrompt, onSubmitAddBlog, onCancelPrompt }: Props) => (
  <View style={styles.container}>
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
          <TouchableOpacity onPress={()=>onAddBlogPress()} style={styles.itemNew}>
            <View>
              <Text style={{color:'#8C07EB'}}>Add new blog</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>

    <Prompt
      title={promptTitle}
      placeholder={promptPlaceholder}
      defaultValue=""
      visible={ isShowPrompt }
      onCancel={ () => onCancelPrompt() }
      onSubmit={ (url) => onSubmitAddBlog(url) }
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    marginTop: 64
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
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
  },
  itemNew: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  }
});
