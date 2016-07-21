// @flow
import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

type props = {
  onPress: any,
  url: string,
  title: string,
};

export default ({ onPress, url, title }:props) => (
  <TouchableHighlight onPress={onPress}>
    <View style={styles.item}>
      <Text>{title}</Text>
      <Text>{url}</Text>
    </View>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  item: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  title: {
    fontSize: 12
  },
  url: {
    fontSize: 10
  }
});
