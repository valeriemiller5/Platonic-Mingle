import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import api from './API';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import Login from './views/Login';
import Home from './views/Home';
import { Constants } from 'expo';

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

  // componentDidMount = () => {
  //   this.getUser();
  // };

  // getUser = async () => {
  //   const user = await api.getUser();
  //   this.setState({ user });
  // };

  // signup = async () => {
  //   await api.signup(this.state.username, this.state.password);
  //   this.getUser();
  // };

  // login = async () => {
  //   try {
  //     await api.login(this.state.username, this.state.password);
  //     this.getUser();
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // logout = async () => {
  //   await api.logout();

  //   this.setState({ user: null });
  // };

  render() {
    if (this.state.loggedIn) {
      return (
        <PaperProvider theme={theme}>
          <View>
            <Home />
          </View>
        </PaperProvider>
      );
    } else {
      return (
        <PaperProvider theme={theme}>
          <Home />
        </PaperProvider>
      );
    }
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
