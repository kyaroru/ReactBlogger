// @flow
import React from 'react';
import { connect } from 'react-redux';
import PostList from '../components/PostList';
import { fetchPost, fetchOlderPost } from '../actions'
import { Actions } from 'react-native-router-flux';

const mapStateToProps = (store) => {
  return {
    posts: store.postState.posts.items,
    isFetching: store.postState.posts.isFetching,
    nextPageToken: store.postState.posts.nextPageToken,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (id) => {
      dispatch(fetchPost(id))
    },
    fetchOlderPosts: (id, nextPageToken) => {
      dispatch(fetchOlderPost(id, nextPageToken))
    },
    onDetailPress: (post) => {
      // console.log('View post: ' + post.id);
      const data = {
        selectedPost: post
      };
      Actions.postDetail(data);
    },
    onCommentPress: (post) => {
      if(post.replies.totalItems!=="0") {
        // console.log(post);
        const data = {
          postId: post.id,
          blogId: post.blog.id,
        };
        Actions.viewComment(data);
      }
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostList)
