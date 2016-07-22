// @flow
import React from 'react';
import { Provider } from 'react-redux';
import createStore from './createStore';
import BlogListContainer from './containers/BlogListContainer'

const store = createStore()

export default () => (
  <Provider store={store}>
    <BlogListContainer></BlogListContainer>
  </Provider>
);
