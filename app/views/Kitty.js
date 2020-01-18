import { ScrollView, View, StyleSheet } from 'react-native';
import Navbar from '../components/TopNavbar';
import LargeCard from '../components/LargeCard';
import SmallCard from '../components/SmallCard';
import React from 'react';
import * as Font from 'expo-font'

await Font.loadAsync({
  Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
  Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf')
});

export default class kitty extends React.Component {
  render() {
    return (
      <ScrollView style={styles.background}>
        <Navbar source={require('../public/images/logo.png')} />
        <LargeCard
          image={require('../public/images/sampleImage(2).jpg')}
          title="Sample Article"
          searchPreview="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <SmallCard
          image={require('../public/images/sampleImage.jpg')}
          title="Sample Article"
          searchPreview="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <SmallCard
          image={require('../public/images/sampleImagea.jpg')}
          title="Sample Article"
          searchPreview="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <SmallCard
          image={require('../public/images/sampleImageb.jpg')}
          title="Sample Article"
          searchPreview="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <SmallCard
          image={require('../public/images/sampleImage.jpg')}
          title="Sample Article"
          searchPreview="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <SmallCard
          image={require('../public/images/sampleImagea.jpg')}
          title="Sample Article"
          searchPreview="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <SmallCard
          image={require('../public/images/sampleImageb.jpg')}
          title="Sample Article"
          searchPreview="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <View style={{ marginBottom: 60 }} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#e1e1e1'
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#e1e1e1'
  }
});
