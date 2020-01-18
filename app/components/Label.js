import React, { Component } from 'react'
import * as Font from 'expo-font'
import { StyleSheet, Text } from 'react-native'

await Font.loadAsync({
  Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
  Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf')
});

const Label = props => {
  return (
    <Text
      style={
        props.styles && props.styles.textLabel
          ? props.styles.textLabel
          : styles.textLabel
      }
    >
      {props.text}
    </Text>
  )
}

const styles = StyleSheet.create({
  textLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ffffff'
  }
})

export default Label
