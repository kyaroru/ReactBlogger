// @flow
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import I18n from '../../config/i18n';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

type Props = {
  onDetailPress: Function,
  onCommentPress: Function,
  content: string,
  title: string,
  published: string,
  numberOfLines: number,
  replies: Array<any>;
};

class Post extends Component {
  props: Props;

  formatContent(content) {
    const newContent = content.replace(/<(?:.|\n)*?>/gm, '');
    const newContentWOSpace = newContent.replace(/\s+/g, ' ');
    return newContentWOSpace;
  }

  render() {
    const { onDetailPress, onCommentPress, content, title, published, numberOfLines, replies } = this.props;
    const contentWithoutHTML = this.formatContent(content);
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={onDetailPress} style={styles.contentViewWrapper}>
          <View style={styles.titleView}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{I18n.strftime(new Date(published), '%d %b %Y %I:%M %p')}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contentViewWrapper} onPress={onDetailPress}>
          <View style={styles.contentView}>
            <Text numberOfLines={numberOfLines}>{contentWithoutHTML}</Text>
          </View>
        </TouchableOpacity>
        {onDetailPress !== undefined && onCommentPress !== undefined && <View style={styles.optionButtonWrapper}>
          <TouchableOpacity onPress={onDetailPress} style={styles.optionButton}>
            <Icon name="search" size={20} color="#9007FF" />
            <Text style={styles.optionButtonText}>{I18n.t('postList.readMore')}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onCommentPress} style={styles.optionButton}>
            <Icon name="comment" size={20} color="#9007FF" />
            <Text style={styles.optionButtonText}>{replies.totalItems} {I18n.t('postList.comments')}</Text>
          </TouchableOpacity>
        </View>}
      </View>
    );
  }
}

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
    padding: 10,
  },
  titleView: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 1,
  },
  contentView: {
    flexDirection: 'column',
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#512DA8',
  },
  subTitle: {
    fontSize: 13,
    color: '#555',
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
    flex: 1,
  },
  optionButtonText: {
    color: '#727272',
  },
  div: {
    margin: 0,
    padding: 0,
  },
  p: {
    margin: 0,
    padding: 0,
  },
});

export default Post;
