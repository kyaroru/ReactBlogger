// @flow
import React from 'react';
import { connect } from 'react-redux';
import PostList from '../components/PostList';
import { fetchPost } from '../actions'

const mapStateToProps = (store) => {
  return {
    posts: store.postState.data.posts,
    isFetching: store.postState.data.isFetching,
    nextPageToken: store.postState.data.nextPageToken,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (id) => {
      dispatch(fetchPost(id))
    },
    onPostPress: (id) => {
      // Actions.viewPost(id)
      console.log('View post: ' + id)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostList)
