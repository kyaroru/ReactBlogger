// @flow
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import createStore from './createStore';
import reducers from './reducers';
import Header from './components/Header';
import BlogListContainer from './containers/BlogListContainer'

const store = createStore(reducers)

export default () => (
  <Provider store={store}>
    <View style={styles.container}>
      <Header title="Blog List"></Header>
      <ScrollView styles={styles.scrollView}>
        <View style={styles.content}>
          <BlogListContainer></BlogListContainer>
        </View>
      </ScrollView>
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
});
