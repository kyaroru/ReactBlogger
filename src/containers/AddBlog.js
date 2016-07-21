// @flow
import React from 'react'
import { connect } from 'react-redux'
import { addBlog, fetchBlogInfo } from '../actions'
import config from '../config'
import {
  TouchableOpacity,
  AlertIOS,
  StyleSheet,
  View,
  Text
} from 'react-native'

type Props = {
  fetchBlogInfo: Function,
  onAddBlogPress: Function,
};

const AddBlog = ({onAddBlogPress}:Props) => {
  return (
    <TouchableOpacity onPress={()=>onAddBlogPress()} style={styles.itemNew}>
      <View>
        <Text style={{color:'#8C07EB'}}>Add new blog</Text>
      </View>
    </TouchableOpacity>
  )
}

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
  fetchBlogInfo(url);
  let blog = {
    url: url,
    title: 'New Blog'
  }
  dispatch(addBlog(blog))

}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddBlogPress: ()=> {
      addNewBlog(dispatch);
    },
    fetchBlogInfo: (url)=> {
      dispatch(fetchBlogInfo(url))
    }
  }
}

const styles = StyleSheet.create({
  itemNew: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
    borderWidth: 1,
    borderColor: '#eee'
  }
});

export default connect(null,mapDispatchToProps)(AddBlog)
