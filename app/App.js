import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Home from './views/Home';

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
    password: ''
  };

  render() {
    return (
      <PaperProvider theme={theme}>
        <Home />
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
