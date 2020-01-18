import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as Font from 'expo-font'

await Font.loadAsync({
  Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
  Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf')
});

const NavButton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4d6391',
    borderColor: '#364668',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 10
  },
  buttonText: {
    fontSize: 18,
    color: '#f4f6f7',
    fontWeight: 'bold'
  }
});

export default NavButton;
