// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createStore from './createStore';
import { Router, Scene } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
import Blogs from './components/blogs/Blogs';
import Posts from './components/posts/Posts';
import PostDetail from './components/posts/PostDetail';
import Comments from './components/comments/Comments';
import createReducers from './ducks';
import I18n from './config/i18n';

// I18n.locale = 'zh';

const scenes = [
  {
    key: 'blogList',
    component: Blogs,
    title: I18n.t('blogList.title'),
    initial: true,
  },
  {
    key: 'postList',
    component: Posts,
    title: I18n.t('postList.title'),
    initial: false,
  },
  {
    key: 'postDetail',
    component: PostDetail,
    title: I18n.t('postDetail.title'),
    initial: false,
  },
  {
    key: 'viewComment',
    component: Comments,
    title: I18n.t('viewComment.title'),
    initial: false,
  },
];

export default class Main extends Component {
  render() {
    const store = createStore(createReducers());
    return (
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
  }
}

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: '#9007FF',
  },
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
  barButtonTextStyle: {

  },
  barButtonIconStyle: {
    tintColor: 'white',
  },
});
