import React, { Component } from 'react'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { View } from 'react-native'

import Login from './views/Login'
import Home from './views/Home'

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3b5b9d',
    accent: '#f4f6f7'
  }
}

export default class ReactNativeCommonScreen extends Component {
  state = {
    loggedIn: true
  }

  render() {
    if (this.state.loggedIn) {
      return (
        <PaperProvider theme={theme}>
          <View>
            <Home />
          </View>
        </PaperProvider>
      )
    } else {
      return <Login />
    }
  }
}
