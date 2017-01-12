// @flow
import React, { Component } from 'react';
import Post from './Post';
import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';

type Props = {
  selectedPost: Object
};

export default class PostDetail extends Component {
  props: Props;

  render() {
    const { selectedPost } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.wrapper}>
            <Post {...selectedPost} withHTML />
          </View>
        </View>
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
    flex: 1,
    alignItems: 'flex-start',
  },
  wrapper: {
    flexDirection: 'column',
    flex: 1,
  },
});
