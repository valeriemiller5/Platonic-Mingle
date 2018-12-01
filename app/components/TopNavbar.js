import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
 export default (Navbar = props => (
  <View>
    <View style={styles.navbar}>
      <View>
        <Image
          style={styles.image}
          source={props.source}
          resizeMode='contain'
          alignSelf='center'
        />
      </View>
    </View>
  </View>
))
 const styles = StyleSheet.create({
  navbar: {
    paddingTop: '15%',
    height: 150,
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
})