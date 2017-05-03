import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { getNavigationOptions, getTabBarOptions } from '../../themes/appStyles';

class Settings extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Setting is Coming!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const tabBar = getTabBarOptions('Settings', 'cog');
Settings.navigationOptions = getNavigationOptions('Settings', '#9007FF', 'white', tabBar);

export default Settings;
