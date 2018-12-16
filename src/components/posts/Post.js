// @flow
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  WebView,
} from 'react-native';
import I18n from 'config/i18n';
import * as Colors from 'themes/colors';

type Props = {
  onDetailPress: Function,
  onCommentPress: Function,
  content: string,
  title: string,
  published: string,
  numberOfLines: number,
  replies: Array<any>;
  withHTML: bool,
};

class Post extends Component {
  props: Props;

  formatContent(content) {
    const newContent = content.replace(/<(?:.|\n)*?>/gm, '');
    const newContentWOSpace = newContent.replace(/\s+/g, ' ');
    return newContentWOSpace;
  }

  renderTitle = () => {
    const { published, title } = this.props;
    return (
      <View style={styles.titleView}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{I18n.strftime(new Date(published), '%d %b %Y %I:%M %p')}</Text>
      </View>
    )
  }

  render() {
    const { withHTML, onDetailPress, onCommentPress, content, title, published, numberOfLines, replies } = this.props;
    const contentWithoutHTML = this.formatContent(content);
    return (
      <View style={withHTML ? styles.itemWithHtml : styles.item}>
        {!withHTML && <View style={styles.titleTop}>{this.renderTitle()}</View>}
        <View style={[styles.contentContainer, withHTML && { marginTop: 70, borderWith: 1 }]}>
          {withHTML && <View style={styles.contentViewWrapperWithHTML}>
            <WebView
              style={styles.webView}
              javaScriptEnabled
              scalesPageToFit
              source={{ html: content }}
            />
          </View>}
          {!withHTML && <TouchableOpacity style={styles.listContent} onPress={onDetailPress}>
            <Text numberOfLines={numberOfLines}>{contentWithoutHTML}</Text>
          </TouchableOpacity>}
          {onDetailPress !== undefined && onCommentPress !== undefined && <View style={styles.optionButtonWrapper}>
            <TouchableOpacity onPress={onDetailPress} style={styles.optionButton}>
              <Icon name="search" size={20} color={Colors.primary} />
              <Text style={styles.optionButtonText}>{I18n.t('postList.readMore')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onCommentPress} style={styles.optionButton}>
              <Icon name="comment" size={20} color={Colors.primary} />
              <Text style={styles.optionButtonText}>{replies.totalItems} {I18n.t('postList.comments')}</Text>
            </TouchableOpacity>
          </View>}
        </View>
        {withHTML && <View style={styles.titleBottom}>{this.renderTitle()}</View>}
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
    borderColor: Colors.nearWhite,
  },
  itemWithHtml: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 1,
  },
  contentContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 1,
  },
  titleTop: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleBottom: {
    borderBottomColor: Colors.nearWhite,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    marginTop: 10,
    position: 'absolute',
  },
  listContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
  contentViewWrapperWithHTML: {
    flex: 1,
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
    color: Colors.accent,
  },
  subTitle: {
    fontSize: 13,
    color: Colors.darkGray,
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
    color: Colors.grayish,
  },
  webView: {
    flex: 1,
  },
});

export default Post;
