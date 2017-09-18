// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import {
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Text,
} from 'react-native';
import Comment from './Comment';
import * as ducks from './ducks';
import { getNavigationOptions } from '../../themes/appStyles';

type Props = {
  blogId: string,
  postId: string,
  fetchComment: Function,
  comments: Array<any>,
  isFetching: bool,
  navigation: Object,
};

class CommentContainer extends Component {
  props: Props;

  componentDidMount() {
    const { state } = this.props.navigation;
    this.props.fetchComment(state.params.blogId, state.params.postId);
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
      (
        <Comment
          key={comment.id}
          {...comment}
        />
      ),
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
  comments: store[ducks.NAME].comments.items,
  isFetching: store[ducks.NAME].comments.isFetching,
});

const mapDispatchToProps = {
  fetchComment: ducks.fetchComment,
};

CommentContainer.navigationOptions = getNavigationOptions('Comments', '#9007FF', 'white');

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);
