// @flow
import React, { Component } from 'react';
import Post from './Post';
import isEmpty from 'lodash/isEmpty';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  ActivityIndicator,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import * as ducks from './ducks';
import { connect } from 'react-redux';

type Props = {
  onDetailPress: Function,
  onCommentPress: Function,
  posts: Array<any>,
  isFetching: bool,
  nextPageToken: string,
  fetchPost: Function,
  blogId: string
};

class PostList extends Component {
  props: Props;

  componentDidMount() {
    this.props.fetchPost(this.props.blogId);
  }

  onDetailPress(post) {
    // console.log('View post: ' + post.id);
    const data = {
      selectedPost: post,
    };
    Actions.postDetail(data);
  }

  onCommentPress(post) {
    if (post.replies.totalItems !== '0') {
      // console.log(post);
      const data = {
        postId: post.id,
        blogId: post.blog.id,
      };
      Actions.viewComment(data);
    }
  }

  renderPosts() {
    const { posts } = this.props;
    if (isEmpty(posts)) {
      return (
        <View>
          <Text />
        </View>
      );
    }
    return posts.map(post =>
      <Post
        key={post.id}
        {...post}
        numberOfLines={5}
        onDetailPress={() => this.onDetailPress(post)}
        onCommentPress={() => this.onCommentPress(post)}
      />
    );
  }

  render() {
    const { isFetching } = this.props;

    return (
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    marginTop: 64,
  },
  content: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  wrapper: {
    flexDirection: 'column',
    flex: 1,
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

const mapStateToProps = (store) => ({
  posts: store[ducks.NAME].posts.items,
  isFetching: store[ducks.NAME].posts.isFetching,
  nextPageToken: store[ducks.NAME].posts.nextPageToken,
});

const mapDispatchToProps = {
  fetchPost: ducks.fetchPost,
  fetchOlderPost: ducks.fetchOlderPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
