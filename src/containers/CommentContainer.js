// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from '../components/Comment';
import { fetchComment } from '../actions';
import isEmpty from 'lodash/isEmpty';

import {
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Text,
} from 'react-native';

type Props = {
  blogId: string,
  postId: string,
  fetchComments: Function,
  comments: Array<any>,
  isFetching: bool,
};

class CommentContainer extends Component {
  props: Props;

  componentDidMount() {
    this.props.fetchComments(this.props.blogId, this.props.postId);
  }

  renderComments() {
    const { comments } = this.props;
    if (isEmpty(comments)) {
      return (
        <View>
          <Text />
        </View>
      );
    }
    return comments.map(comment =>
      <Comment
        key={comment.id}
        {...comment}
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
                {!isFetching && this.renderComments()}
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

const mapStateToProps = (store) => {
  return {
    comments: store.postState.comments.items,
    isFetching: store.postState.comments.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: (blogId, postId) => {
      dispatch(fetchComment(blogId, postId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);
