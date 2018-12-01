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
    loggedIn: false
  };

  componentDidMount() {
    api.getUser().then(user => {
      this.setState({ user });
    });
  }

  login = async () => {
    const user = await api.login('e', 'a');

    this.setState({ user });
  };

  logout = async () => {
    await api.logout();

    this.setState({ user: null });
  };

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
          <Home handleLogin={this.logIn} />
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
