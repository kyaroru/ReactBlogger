// @flow
import React, { Component } from 'react';
import I18n from '../config/i18n';
import {
  View,
  StyleSheet,
  Text,
  Image,
} from 'react-native';

type Props = {
  onPress: any,
  url: string,
  name: string,
  content: string,
  published: any,
  author: Object,
};

export default class Comment extends Component {
  props: Props;

  formatContent(content) {
    const newContent = content.replace(/<(?:.|\n)*?>/gm, '');
    const newContentWOSpace = newContent.replace(/\s+/g, ' ');
    return newContentWOSpace;
  }

  render() {
    const { content, published, author } = this.props;
    const contentWithoutHTML = this.formatContent(content);
    return (
      <View>
        <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
          <Image style={{ width: 35, height: 35, marginRight: 10 }} resizeMode={Image.resizeMode.contain} source={{ uri: `https:${author.image.url}` }} />
          <View style={styles.contentViewWrapper}>
            <View style={styles.titleView}>
              <Text style={styles.title}>{author.displayName}</Text>
              <Text style={styles.subTitle}>{I18n.strftime(new Date(published), '%d %b %Y %I:%M %p')}</Text>
            </View>
          </View>
        </View>
        <View style={[styles.contentViewWrapper, { paddingBottom: 10, borderColor: '#eee', borderBottomWidth: 1 }]}>
          <View style={styles.contentView}>
            <Text>{contentWithoutHTML}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentViewWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
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
  base64: {
    flex: 1,
    height: 50,
    resizeMode: 'contain',
  },
});
