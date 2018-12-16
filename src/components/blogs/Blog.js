// @flow
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import * as Colors from 'themes/colors';

type props = {
  onPress: any,
  url: string,
  name: string,
  isDeleteModeOn: bool,
  onDeletePress: any,
};

export default ({ onPress, url, name, isDeleteModeOn, onDeletePress }: props) => (
  <TouchableOpacity onPress={isDeleteModeOn ? onDeletePress : onPress} style={styles.item}>
    <View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.url}>{url}</Text>
    </View>
    <View style={{ padding: 10, paddingRight: 0 }}>
      {isDeleteModeOn && <Icon name="trash" size={20} color={Colors.gray} style={styles.iconAdd} />}
      {!isDeleteModeOn && <Icon name="chevron-right" size={20} color={Colors.gray} style={styles.iconAdd} />}
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
    borderColor: Colors.nearWhite,
  },
  name: {
    fontSize: 16,
  },
  url: {
    fontSize: 12,
  },
});
