// @flow
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/EvilIcons';
import HTMLView from 'react-native-htmlview';
import I18n from '../config/i18n'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

type Props = {
  onDetailPress: Function,
  onCommentPress: Function,
  content: string,
  title: string,
  published: string
};

class Post extends Component {
  constructor(props: Props) {
    super(props);
  }

  formatContent(content) {
    const newContent = content.replace(/<(?:.|\n)*?>/gm, '');
    const newContentWOSpace = newContent.replace(/\s+/g, " ");
    return newContentWOSpace;
  }

  render() {
    const { onDetailPress, onCommentPress, content, title, published } = this.props;
    const contentWithoutHTML = this.formatContent(content);
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={onDetailPress} style={styles.contentViewWrapper}>
          <View style={styles.titleView}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{I18n.l("time.formats.short", published)}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.contentViewWrapper}>
          <View style={styles.contentView}>
            <Text numberOfLines={5}>{contentWithoutHTML}</Text>
          </View>
        </View>
        <View style={styles.optionButtonWrapper}>
          <TouchableOpacity onPress={onDetailPress} style={styles.optionButton}>
            <Icon name="search" size={20} color="#9007FF"/>
            <Text style={styles.optionButtonText}>  {I18n.t('postList.readMore')}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onCommentPress} style={styles.optionButton}>
            <Icon name="comment" size={20} color="#9007FF"/>
            <Text style={styles.optionButtonText}>  {I18n.t('postList.comments')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

//<HTMLView numberOfLines={5} value={content} stylesheet={styles} onLinkPress={(url) => console.log('clicked link: ', url)}/>

const styles = StyleSheet.create({
  item: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  contentViewWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10
  },
  titleView: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 1
  },
  contentView: {
    flexDirection: 'column',
    flex: 1
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#512DA8'
  },
  subTitle: {
    fontSize: 13,
    color: '#555'
  },
  content: {
    fontSize: 12,
  },
  optionButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  optionButton: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1
  },
  optionButtonText: {
    color: '#727272'
  },
  div: {
    margin: 0,
    padding: 0,
  },
  p: {
    margin: 0,
    padding: 0
  }
});

export default Post
