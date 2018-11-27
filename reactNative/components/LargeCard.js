import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

const LargeCard = props => (
  <View style={styles.cardView}>
    <Image style={styles.image} source={props.image} resizeMode="contain" />
    <Text style={styles.cardTitle}>{props.title}</Text>
    <Text style={styles.cardDetails}>{props.searchPreview}</Text>
  </View>
)

export default LargeCard

const styles = StyleSheet.create({
  cardView: {
    padding: 0,
    margin: 15,
    marginTop: 5,
    marginBottom: 2,
    backgroundColor: '#fef9f6',
  },
  image: { width: null, height: 240, marginTop: 0},
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#43484d'
  },
  cardDetails: {
    fontSize: 14,
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    color: '#43484d'
  }
})