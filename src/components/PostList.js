// @flow
import React, {Component} from 'react'
import { connect } from 'react-redux'
import Post from './Post'
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
  onDetailPress: Function,
  onCommentPress: Function,
  posts: Array<any>,
  isFetching: bool,
  nextPageToken: string,
  fetchPosts: Function,
  blogId: string
};

class PostList extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts(this.props.blogId);
  }

  render() {
    const { isFetching } = this.props;

    return(
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
                {!isFetching && this.renderPosts()}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    )

  }

  renderPosts() {
    const { onDetailPress, onCommentPress, posts } = this.props;
    if(isEmpty(posts)){
      return (
        <View>
          <Text> </Text>
        </View>
      )
    }
    return posts.map(post =>
      <Post
        key={post.id}
        {...post}
        onDetailPress={()=>onDetailPress(post.id)}
        onCommentPress={()=>onCommentPress(post.id)}
      />
    )
  }
}

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
});

export default PostList
