// @flow
import React from 'react';
import { connect } from 'react-redux';
import BlogList from '../components/BlogList';
import { removeBlog, fetchBlogInfo, showPrompt, hidePrompt } from '../actions'
import { Actions } from 'react-native-router-flux';
import I18n from '../config/i18n'
import {
  AlertIOS,
  Platform
} from 'react-native'

const addNewBlog = (dispatch) => {
  if (Platform.OS === 'ios') {
    AlertIOS.prompt(
      I18n.t('blogList.enterBlogURL'),
      I18n.t('blogList.enterBlogURLInfo'),
      [
        {text: I18n.t('cancel'), onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: I18n.t('ok'), onPress: url => submitAddBlog(url,dispatch)},
      ]
    );
  } else {
    dispatch(showPrompt(I18n.t('blogList.enterBlogURL'),'angularjs.blogspot.com'));
  }
}

const submitAddBlog = (url: string, dispatch) => {
  if(Platform.OS === 'android') {
    dispatch(hidePrompt());
  }

  let processUrl = url.replace('https://', '');
  processUrl = processUrl.replace('http://', '');
  processUrl = replaceAll(processUrl,'/', '');
  let regenUrl = 'http://'+processUrl+'/';

  dispatch(fetchBlogInfo(regenUrl));
}

const replaceAll = (str,search, replacement) => {
    return str.replace(new RegExp(search, 'g'), replacement);
}

const mapStateToProps = (store) => {
  return {
    blogs: store.blogState.blogs,
    isFetching: store.blogState.blogInfo.isFetching,
    isShowPrompt: store.blogState.prompt.isShowPrompt,
    promptTitle: store.blogState.prompt.title,
    promptPlaceholder: store.blogState.prompt.placeholder
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBlogPress: (id) => {
      Actions.postList({blogId:id})
    },
    onAddBlogPress: () => {
      addNewBlog(dispatch);
    },
    onSubmitAddBlog: (url) => {
      submitAddBlog(url, dispatch)
    },
    onRemoveBlogPress: (id) => {
      dispatch(removeBlog(id))
    },
    onCancelPrompt: () => {
      dispatch(hidePrompt())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BlogList)
