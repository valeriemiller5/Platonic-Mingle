import React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import Navbar from '../components/TopNavbar'
import LargeCard from '../components/LargeCard'
import SmallCard from '../components/SmallCard'
import BottomNav from '../components/BottomNavBar'

class Home extends React.Component {
  render() {
    return (
      <View>
        <ScrollView style={styles.background}>
          <Navbar source={require('./../public/images/logo.png')} />
          <LargeCard
            image={require('../public/images/sampleImage(2).jpg')}
            title='Sample Article'
            searchPreview='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          />
          <SmallCard
            image={require('../public/images/sampleImage.jpg')}
            title='Sample Article'
            searchPreview='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          />
          <SmallCard
            image={require('../public/images/sampleImagea.jpg')}
            title='Sample Article'
            searchPreview='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          />
          <SmallCard
            image={require('../public/images/sampleImageb.jpg')}
            title='Sample Article'
            searchPreview='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          />
          <SmallCard
            image={require('../public/images/sampleImage.jpg')}
            title='Sample Article'
            searchPreview='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          />
          <SmallCard
            image={require('../public/images/sampleImagea.jpg')}
            title='Sample Article'
            searchPreview='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          />
          <SmallCard
            image={require('../public/images/sampleImageb.jpg')}
            title='Sample Article'
            searchPreview='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          />
          <View style={{ marginBottom: 60 }} />
        </ScrollView>
        <BottomNav />
      </View>
    )
  }
}

export default Home

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#e1e1e1'
  }
})