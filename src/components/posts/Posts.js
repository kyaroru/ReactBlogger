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
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import * as ducks from './ducks';
import { connect } from 'react-redux';

type Props = {
  onDetailPress: Function,
  onCommentPress: Function,
  posts: Array<any>,
  isFetching: bool,
  isFetchingOlderPost: bool,
  nextPageToken: string,
  fetchPost: Function,
  fetchOlderPost: Function,
  blogId: string
};

class PostList extends Component {
  props: Props;

  constructor(props) {
    super(props);
    this.state = {
      labelLoadMore: 'Load more',
    };
  }

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

  onLoadMore() {
    if (this.props.nextPageToken) {
      this.props.fetchOlderPost(this.props.blogId, this.props.nextPageToken);
    } else {
      this.setState({ labelLoadMore: 'This is the end :p' });
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
        withHTML={false}
        numberOfLines={5}
        onDetailPress={() => this.onDetailPress(post)}
        onCommentPress={() => this.onCommentPress(post)}
      />
    );
  }

  render() {
    const { isFetching, isFetchingOlderPost } = this.props;

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
                {!isFetching && <TouchableOpacity onPress={() => this.onLoadMore()} style={{ flexDirection: 'row', padding: 10, alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ paddingRight: 5 }}>{this.state.labelLoadMore}</Text>
                  {isFetchingOlderPost && <ActivityIndicator
                    style={{ padding: 0, margin: 0 }}
                    color="black"
                    animating={isFetchingOlderPost}
                  />}
                </TouchableOpacity>}
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
  isFetchingOlderPost: store[ducks.NAME].posts.isFetchingOlderPost,
  nextPageToken: store[ducks.NAME].posts.nextPageToken,
});

const mapDispatchToProps = {
  fetchPost: ducks.fetchPost,
  fetchOlderPost: ducks.fetchOlderPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
