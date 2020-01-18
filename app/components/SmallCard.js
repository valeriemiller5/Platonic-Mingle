import React from 'react';
import { Text, View, Image, Linking, StyleSheet } from 'react-native';
import Row from '../components/Row';
import LikeIcon from '../components/LikeIcon';
import * as Font from 'expo-font'

await Font.loadAsync({
  Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
  Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf')
});

const SmallCard = props => (
  <View style={styles.cardView}>
    <Row>
      <View style={{ width: '30%' }}>
        <Image
          style={{ marginTop: 5, marginLeft: 5, width: null, height: 100 }}
          source={require('../public/images/poop.png')}
          resizeMode="contain"
        />
        <LikeIcon {...props} />
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

export default SmallCard;

const styles = StyleSheet.create({
  cardView: {
    height: 130,
    padding: 0,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#fef9f6'
  },
  cardTitle: {
    fontSize: 14,
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
});
