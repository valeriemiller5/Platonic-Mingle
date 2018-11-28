import React, { Component } from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { View } from "react-native";

import Login from "./views/Login";
import Home from "./views/Home";
import { Constants } from "expo";

const { manifest } = Constants;
const apiHost =
  typeof manifest.packagerOpts === `object` && manifest.packagerOpts.dev
    ? manifest.debuggerHost
        .split(`:`)
        .shift()
        .concat(`:3000`)
    : `api.example.com`;

console.log(`apiHost is ${apiHost}`);
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3b5b9d",
    accent: "#f4f6f7"
  }
};

export default class ReactNativeCommonScreen extends Component {
  state = {
    loggedIn: false
  };

  logIn = () => {
    this.setState({ loggedIn: true });
  };

  logOut = () => {
    this.setState({ loggedIn: false });
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
