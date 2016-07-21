// @flow
import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

type props = {
  onPress: any,
  url: string,
  title: string,
};

export default ({ onPress, url, title }:props) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <View>
      <Text>{title}</Text>
      <Text>{url}</Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  item: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  title: {
    fontSize: 12
  },
  url: {
    fontSize: 10
  }
});
