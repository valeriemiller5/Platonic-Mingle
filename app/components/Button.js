import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import * as Font from 'expo-font'

await Font.loadAsync({
  Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
  Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf')
});

const Button = props => {
  function getContent() {
    if (props.children) {
      return props.children;
    }
    return <Text>dummy</Text>;
  }

  return (
    <TouchableHighlight
      underlayColor="#ccc"
      onPress={props.onPress}
      style={[
        props.noDefaultStyles ? '' : styles.button,
        props.styles ? props.styles.button : ''
      ]}
    >
      {getContent()}
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  }
});

export default Button;
