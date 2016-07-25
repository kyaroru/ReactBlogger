// @flow
import React from 'react';
import { Provider } from 'react-redux';
import createStore from './createStore';
import { Router, Scene } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
import BlogListContainer from './containers/BlogListContainer'
import PostListContainer from './containers/PostListContainer'

const store = createStore()

export default () => (
  <Provider store={store}>
    <Router navigationBarStyle={styles.barStyle} titleStyle={styles.titleStyle} barButtonIconStyle={styles.barButtonIconStyle}>
       <Scene key="root">
         <Scene key="blogList" component={BlogListContainer} title="Blog List" initial={true} />
         <Scene key="postList" component={PostListContainer} title="Post List" />
       </Scene>
     </Router>
  </Provider>
);

const styles = {
  barStyle: {
    backgroundColor: '#9007FF',
  },
  titleStyle: {
    color: 'white',
    fontWeight: 'bold'
  },
  barButtonTextStyle: {

  },
  barButtonIconStyle: {
    tintColor: 'white'
  }
}

// <Provider store={store}>
//   <BlogListContainer></BlogListContainer>
// </Provider>
