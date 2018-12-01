import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

const NavButton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '33%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#173654'
  },
  buttonText: {
    color: '#f4f6f7',
    fontWeight: 'bold'
  }
})

export default NavButton