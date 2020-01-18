import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import * as Font from 'expo-font'

await Font.loadAsync({
  Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
  Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf')
});

export default (Navbar = props => (
  <View>
    <View style={styles.navbar}>
      <View>
        <Image
          style={styles.image}
          source={props.source}
          resizeMode="contain"
          alignSelf="center"
        />
      </View>
    </View>
  </View>
));
const styles = StyleSheet.create({
  navbar: {
    paddingTop: '10%',
    height: 130,
    resizeMode: 'stretch',
    backgroundColor: '#3b5b9d'
  },
  image: {
    width: '85%',
    height: 50
  },
  button: {
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});
