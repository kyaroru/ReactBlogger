// @flow
import React from 'react'
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

type props = {
  onClick: Function,
  favourite: bool,
  url: string,
  title: string,
};

export default ({ onClick, favourite, title, url }: props) => (
  <li
    onClick={onClick}
    style={{
      color: favourite ? 'red' : 'black'
    }}
  >
    <View style={styles.item}>
      <Text>{title}</Text>
      <Text>{url}</Text>
    </View>
  </li>
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
