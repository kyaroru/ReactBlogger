import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

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

export default Settings;
