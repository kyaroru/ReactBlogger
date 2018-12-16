import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import * as Colors from 'themes/colors';

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
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Settings;
