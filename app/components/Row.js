import React from 'react'
import { StyleSheet, View } from 'react-native'
import * as Font from 'expo-font'

await Font.loadAsync({
  Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
  Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf')
});

const Row = props => {
  return <View style={styles.row}>{props.children}</View>
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  }
})

export default Row