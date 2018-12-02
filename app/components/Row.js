import React from 'react'
import { StyleSheet, View } from 'react-native'

const Row = props => {
  return <View style={styles.row}>{props.children}</View>
}

const styles = StyleSheet.create({
  row: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
})

export default Row