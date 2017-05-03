// @flow
import React, { Component } from 'react';
import Blog from './Blog';
import Prompt from 'react-native-prompt';
import I18n from '../../config/i18n';
import * as ducks from './ducks';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Platform,
  AlertIOS,
  StatusBar,
} from 'react-native';
import { confirmation } from '../../utils/alert';
import isEmpty from 'lodash/isEmpty';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getNavigationOptions, getTabBarOptions } from '../../themes/appStyles';

type Props = {
  showPrompt: Function,
  hidePrompt: Function,
  fetchBlogInfo: Function,
  blogs: Array<any>,
  isFetching: bool,
  promptTitle: string,
  promptPlaceholder: string,
  isShowPrompt: bool,
  isDeleteModeOn: bool,
  removeBlog: Function,
  initializeBlog: Function,
  navigation: Object,
};

class BlogList extends Component {
  props: Props;

  componentDidMount() {
    this.props.initializeBlog();
  }

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

  removeBlog(blog) {
    const { removeBlog } = this.props;
    const confirmRemoveBlog = () => {
      removeBlog(blog.id);
    };
    confirmation('Confirm', `Are you sure you want to remove the blog [${blog.name}] ?`, confirmRemoveBlog);
  }

  renderList() {
    const { blogs, isDeleteModeOn } = this.props;
    return (
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.wrapper}>
            <View>
              {Object.keys(blogs).map(key =>
                <Blog
                  key={key}
                  {...blogs[key]}
                  isDeleteModeOn={isDeleteModeOn}
                  onPress={() => {
                    const { navigate } = this.props.navigation;
                    navigate('BlogPosts', { blogId: blogs[key].id });
                  }}
                  onDeletePress={() => this.removeBlog(blogs[key])}
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
    );
  }

  renderEmptyList() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ marginBottom: 20 }}><Icon name="rss" size={100} color="#aaa" style={styles.iconAdd} /></View>
        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => this.addNewBlog()} >
          <Text>{I18n.t('blogList.noBlog')}</Text>
          <Text style={{ color: '#8C07EB' }}>{I18n.t('blogList.addOneNow')}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const { blogs, isFetching, promptTitle, promptPlaceholder, isShowPrompt, hidePrompt } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={'#9007FF'}
          barStyle="light-content"
        />
        <ActivityIndicator
          animating={!!isFetching}
          style={styles.centering}
          size="large"
        />
        {!isEmpty(blogs) && this.renderList()}
        {isEmpty(blogs) && this.renderEmptyList()}
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
  },
  content: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
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
  blogs: store[ducks.NAME].blogs,
  isFetching: store[ducks.NAME].blogInfo.isFetching,
  isShowPrompt: store[ducks.NAME].prompt.isShowPrompt,
  promptTitle: store[ducks.NAME].prompt.title,
  promptPlaceholder: store[ducks.NAME].prompt.placeholder,
  isDeleteModeOn: store[ducks.NAME].deleteMode.isDeleteModeOn,
});

const mapDispatchToProps = {
  showPrompt: ducks.showPrompt,
  hidePrompt: ducks.hidePrompt,
  fetchBlogInfo: ducks.fetchBlogInfo,
  removeBlog: ducks.removeBlog,
  initializeBlog: ducks.initializeBlog,
};

const tabBar = getTabBarOptions('Blog List', 'list-ul');
BlogList.navigationOptions = getNavigationOptions('Blog List', '#9007FF', 'white', tabBar);

export default connect(mapStateToProps, mapDispatchToProps)(BlogList);
