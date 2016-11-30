// @flow
import React, { Component } from 'react';
import Blog from './Blog';
import Prompt from 'react-native-prompt';
import I18n from '../config/i18n';
import { fetchBlogInfo, showPrompt, hidePrompt } from '../actions';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Platform,
  AlertIOS,
} from 'react-native';

type Props = {
  showPrompt: Function,
  hidePrompt: Function,
  fetchBlogInfo: Function,
  blogs: Array<any>,
  isFetching: bool,
  promptTitle: string,
  promptPlaceholder: string,
  isShowPrompt: bool,
};

class BlogList extends Component {
  props: Props;

  addNewBlog() {
    const { showPrompt } = this.props;
    if (Platform.OS === 'ios') {
      AlertIOS.prompt(
        I18n.t('blogList.enterBlogURL'),
        I18n.t('blogList.enterBlogURLInfo'),
        [
           { text: I18n.t('cancel'), onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
           { text: I18n.t('ok'), onPress: url => this.submitAddBlog(url) },
        ],
       );
    } else {
      showPrompt(I18n.t('blogList.enterBlogURL'), 'angularjs.blogspot.com');
    }
  }

  submitAddBlog(url: string) {
    const { fetchBlogInfo, hidePrompt } = this.props;
    if (Platform.OS === 'android') {
      hidePrompt();
    }

    let processUrl = url.replace('https://', '');
    processUrl = processUrl.replace('http://', '');
    processUrl = this.replaceAll(processUrl, '/', '');
    const regenUrl = `http://${processUrl}/`;

    fetchBlogInfo(regenUrl);
  }

  replaceAll(str, search, replacement) {
    return str.replace(new RegExp(search, 'g'), replacement);
  }

  render() {
    const { blogs, isFetching, promptTitle, promptPlaceholder, isShowPrompt, hidePrompt } = this.props;

    return (
      <View style={styles.container}>
        <ActivityIndicator
          animating={!!isFetching}
          style={styles.centering}
          size="large"
        />
        <ScrollView>
          <View style={styles.content}>
            <View style={styles.wrapper}>
              <View>
                {blogs.map(blog =>
                  <Blog
                    key={blog.id}
                    {...blog}
                    onPress={() => Actions.postList({ blogId: blog.id })}
                  />
                )}
              </View>
              <TouchableOpacity onPress={() => this.addNewBlog()} style={styles.itemNew}>
                <View>
                  <Text style={{ color: '#8C07EB' }}>{I18n.t('blogList.addNewBlog')}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        <Prompt
          title={promptTitle}
          placeholder={promptPlaceholder}
          defaultValue=""
          visible={isShowPrompt}
          onCancel={() => hidePrompt()}
          onSubmit={(url) => this.submitAddBlog(url)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    marginTop: 64,
  },
  content: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  wrapper: {
    flexDirection: 'column',
    flex: 1,
  },
  centering: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
  },
  itemNew: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
});

const mapStateToProps = (store) => ({
  blogs: store.blogState.blogs,
  isFetching: store.blogState.blogInfo.isFetching,
  isShowPrompt: store.blogState.prompt.isShowPrompt,
  promptTitle: store.blogState.prompt.title,
  promptPlaceholder: store.blogState.prompt.placeholder,
});

const mapDispatchToProps = {
  onBlogPress: Actions.postList,
  showPrompt,
  hidePrompt,
  fetchBlogInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogList);
