// @flow
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

type props = {
  title: string,
  onIconPress: Function,
  iconName: string
};

export default ({ title, onIconPress, iconName }: props) => (
  <View style={styles.bar}>
    <View style={styles.statusBar}>
    <Text style={styles.text}> </Text>
    </View>
    <View style={styles.navBar}>
      <View style={styles.iconView}>
        <Text> </Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.iconView} onPress={()=>onIconPress()}>
        <Icon name={iconName} size={20} color="#fff" style={styles.iconAdd}/>
      </TouchableOpacity>
    </View>
  </View>
)

const styles = StyleSheet.create({
  bar: {
    height: 64,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9007FF'
  },
  statusBar: {
    height: 20
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 44
  },
  textView: {
    flex:4,
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  iconView: {
    flex:1,
    alignItems: 'center'
  }
});
