// @flow
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

type props = {
  onPress: any,
  url: string,
  name: string,
};

export default ({ onPress, url, name }: props) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.url}>{url}</Text>
    </View>
    <View style={{ padding: 10 }}>
      <Icon name="chevron-right" size={15} color="#aaa" style={styles.iconAdd} />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  name: {
    fontSize: 16,
  },
  url: {
    fontSize: 12,
  },
});
