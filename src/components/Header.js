// @flow
import React from 'react'
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

type props = {
  title: string,
};

export default ({ title }: props) => (
  <View style={styles.bar}>
    <View style={styles.statusBar}>
    </View>
    <View style={styles.navBar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  bar: {
    height: 88,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9007FF'
  },
  statusBar: {
    height: 40
  },
  navBar: {
    height: 44
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
});
