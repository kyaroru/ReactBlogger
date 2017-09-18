import { NavigationActions } from 'react-navigation';
import React, { Component } from 'react';
import {
  View,
  BackHandler,
  ToastAndroid,
} from 'react-native';
import AppNavigator from './components/navigation/AppNavigator';

class App extends Component {
  constructor() {
    super();
    this.handleBackButton = this.handleBackButton.bind(this);
    this.backButtonExitCount = 0;
  }

  componentDidMount() {
    BackHandler.addEventListener('backPress', this.handleBackButton);
  }

  handleBackButton() {
    if (this.navigation && this.navigation.state.nav.routes.length > 1) {
      this.navigation.dispatch(NavigationActions.back());
      return true;
    } else if (this.backButtonExitCount === 0) {
      ToastAndroid.show('Press again to Exit.', ToastAndroid.SHORT);
      this.backButtonExitCount = 1;
      setTimeout(() => {
        this.backButtonExitCount = 0;
      }, 1000);
      return true;
    }
    return false;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppNavigator
          ref={(navigation) => {
            this.navigation = navigation;
          }}
        />
      </View>
    );
  }
}

export default App;
