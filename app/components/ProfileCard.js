import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import Row from './Row'

const LargeCard = props => (
  <View style={styles.cardView}>
    <Row>
        <Text style={styles.cardTitle}>Disclaimer: Platonic Mingle will not distribute your data to
                  third parties unless it's for money</Text>
        <Text style={styles.cardTitle}>{props.userName}</Text>
        <Text style={styles.cardDetails}>{props.firstName}</Text>
        <Text style={styles.cardDetails}>{props.lastName}</Text>
        <Text style={styles.cardDetails}>{props.age}</Text>
        <Text style={styles.cardDetails}>{props.gender}</Text>
        <Text style={styles.cardDetails}>{props.bio}</Text>
    </Row>
  </View>
);

export default LargeCard;

const styles = StyleSheet.create({
  cardView: {
    padding: 0,
    margin: 15,
    marginTop: 5,
    marginBottom: 2,
    backgroundColor: '#a9a9a9'
  },
  image: { width: null, height: 240, marginTop: 0 },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    marginLeft: 0,
    color: '#8b0000'
  },
  cardDetails: {
    fontSize: 14,
    textAlign: 'center',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10,
    color: '#43484d'
  }
});