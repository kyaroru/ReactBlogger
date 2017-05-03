// @flow
import React, { Component } from 'react';
import Post from './Post';
import {
  View,
  StyleSheet,
} from 'react-native';
import { getNavigationOptions } from '../../themes/appStyles';

type Props = {
  navigation: Object
};

export default class PostDetail extends Component {
  props: Props;

  render() {
    const { state } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.wrapper}>
            <Post {...state.params.selectedPost} withHTML />
          </View>
        </View>
      </View>
    );
  }
}

PostDetail.navigationOptions = getNavigationOptions('Post Detail', '#9007FF', 'white');

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
    flex: 1,
    alignItems: 'flex-start',
  },
  wrapper: {
    flexDirection: 'column',
    flex: 1,
  },
});
