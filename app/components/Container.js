import React from 'react'
import { StyleSheet, View } from 'react-native'
import * as Font from 'expo-font'

await Font.loadAsync({
  Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
  Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf')
});

const Container = props => {
  return <View style={styles.labelContainer}>{props.children}</View>
}

const styles = StyleSheet.create({
  labelContainer: {
    marginBottom: 20
  }
})

export default Container