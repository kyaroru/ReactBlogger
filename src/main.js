import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import createStore from './createStore';
import App from './app';

class Main extends React.Component {
  componentWillMount() {
    SplashScreen.hide();
  }

  render() {
    const store = createStore();

    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Main;
