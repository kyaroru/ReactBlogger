// @flow
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { fetchBlogInfo } from '../actions'
import {
  AlertIOS
} from 'react-native'

const addNewBlog = (dispatch) => {
  AlertIOS.prompt(
    'Enter Blog URL',
    'Enter your blogger URL to be added to the reading list',
    [
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'OK', onPress: url => submitAddBlog(url,dispatch)},
    ]
  );
}

const submitAddBlog = (url: string, dispatch) => {
  let processUrl = url.replace('https://', '');
  processUrl = processUrl.replace('http://', '');
  processUrl = replaceAll(processUrl,'/', '');
  let regenUrl = 'http://'+processUrl+'/';

  dispatch(fetchBlogInfo(regenUrl));
}

const replaceAll = (str,search, replacement) => {
    return str.replace(new RegExp(search, 'g'), replacement);
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIconPress: ()=> {
      addNewBlog(dispatch);
    }
  }
}

export default connect(null,mapDispatchToProps)(Header)
