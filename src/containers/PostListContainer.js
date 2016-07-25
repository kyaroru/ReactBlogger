// @flow
import React from 'react';
import { connect } from 'react-redux';
import PostList from '../components/PostList';
import { fetchPost } from '../actions'

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
    onDetailPress: (id) => {
      // Actions.viewPost(id)
      console.log('View post: ' + id)
    },
    onCommentPress: (id) => {
      // Actions.viewComment(id)
      console.log('View comment for post: ' + id)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostList)
