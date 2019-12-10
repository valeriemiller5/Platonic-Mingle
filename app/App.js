import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Home from './views/Home';
import * as Font from 'expo-font';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3b5b9d',
    accent: '#f4f6f7'
  }
};

export default class App extends React.Component {
  state = {
    user: null,
    username: '',
    password: '',
    isReady: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf')
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return (<Text>App is loading...</Text>);
    }
    return (
      <PaperProvider theme={theme}>
        <Home />
      </PaperProvider>
    );
  }

  // render() {
  //   return (
  //     <PaperProvider theme={theme}>
  //       <Home />
  //     </PaperProvider>
  //   );
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
