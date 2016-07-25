// @flow
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import HTMLView from 'react-native-htmlview';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

type Props = {
  onPress: any,
  content: string,
  title: string,
  published: string
};

class Post extends Component {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { onPress, content, title, published } = this.props;

    return (
      <View style={styles.item}>
        <View style={styles.contentViewWrapper}>
          <View style={styles.titleView}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{published}</Text>
          </View>
        </View>
        <View style={styles.contentViewWrapper}>
          <View style={styles.contentView}>
            <Text numberOfLines={5}>{content}</Text>
          </View>
        </View>
        <View style={styles.contentViewWrapper}>
          <View>
            <TouchableOpacity onPress={onPress} style={styles.optionButton}>
              <Text>Details  </Text>
              <Icon name="ios-more" size={20} color="#9007FF"/>
            </TouchableOpacity>
          </View>
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
    borderWidth: 1,
    marginBottom:10,
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
    fontSize: 16
  },
  subTitle: {
    fontSize: 13
  },
  content: {
    fontSize: 12,
  },
  optionButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
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
