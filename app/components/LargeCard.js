import React from 'react'
import { Text, View, Image, Linking, StyleSheet } from 'react-native'
import Row from '../components/Row';
import LikeIcon from '../components/LikeIcon';

const LargeCard = props => (
  <View style={styles.cardView}>
    <Row>
      <View style={{ width: '30%' }}>
        <Image
          style={{ marginLeft: 5, width: null, height: 100 }}
          source={{
            uri: `${props.image}` || require('../public/images/sampleImage.jpg')
          }}
          resizeMode="contain"
        />
        <LikeIcon id={props.name} onPress={props.click} />
      </View>
      <View style={{ width: '70%' }}>
        <Text style={styles.cardTitle}>{props.name}</Text>
        <Text style={styles.cardDetails}>{props.description}</Text>
        <Text
          onPress={() => Linking.openURL(props.url)}
          style={styles.cardDetails}
        >
          Click here to learn more!
        </Text>
      </View>
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
    backgroundColor: '#fef9f6'
  },
  image: { width: null, height: 240, marginTop: 0 },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    marginLeft: 5,
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
});
