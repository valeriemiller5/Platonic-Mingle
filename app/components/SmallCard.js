import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import Row from '../components/Row'
import LikeIcon from '../components/LikeIcon'

export default class SmallCard extends React.Component {
  render() {
    return (
      <View style={styles.cardView}>
        <Row>
          <View style={{ width: '30%' }}>
            <Image
              style={{ marginLeft: 5, width: null, height: 100 }}
              source={this.props.image}
              resizeMode="contain"
            />
            <LikeIcon />
          </View>
          <View style={{ width: '70%' }}>
            <Text style={styles.cardTitle}>{this.props.title}</Text>
            <Text style={styles.cardDetails}>{this.props.searchPreview}</Text>
          </View>
        </Row>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  cardView: {
    height: 130,
    padding: 0,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#fef9f6',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 20,
    marginLeft: 15,
    justifyContent: 'center',
    color: '#43484d',
    width: '100%'
  },
  cardDetails: {
    fontSize: 14,
    textAlign: 'left',
    marginBottom: 10,
    marginLeft: 15,
    paddingRight: 0,
    color: '#43484d',
    width: '100%'
  }
})