// @flow
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Header from './components/Header';
import BlogListContainer from './containers/BlogListContainer';

const store = createStore(reducers)

export default () => (
  <Provider store={store}>
    <View style={styles.container}>
      <Header title="Blog List"></Header>
      <View style={styles.content}>
        <BlogListContainer></BlogListContainer>
      </View>
    </View>
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  },
  content: {
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
