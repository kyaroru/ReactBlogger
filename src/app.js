// @flow
import React from 'react';
import { Provider } from 'react-redux';
import createStore from './createStore';
import { Router, Scene } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
import BlogListContainer from './containers/BlogListContainer'
import PostListContainer from './containers/PostListContainer'
import I18n from './config/i18n'

// I18n.locale = 'zh';

const store = createStore()

const scenes = [
  {
    key: 'blogList',
    component: BlogListContainer,
    title: I18n.t('blogList.title'),
    initial: true
  },
  {
    key: 'postList',
    component: PostListContainer,
    title: I18n.t('postList.title'),
    initial: false
  }
];

export default () => (
  <Provider store={store}>
    <Router navigationBarStyle={styles.barStyle} titleStyle={styles.titleStyle} barButtonIconStyle={styles.barButtonIconStyle}>
       <Scene key="root">
          {scenes.map(scene =>
            <Scene key={scene.key} component={scene.component} title={scene.title} initial={scene.initail} />
          )}
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
