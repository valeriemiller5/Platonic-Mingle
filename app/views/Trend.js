import { ScrollView, View, Linking, StyleSheet } from 'react-native';
import Navbar from '../components/TopNavbar';
import LargeCard from '../components/LargeCard';
import SmallCard from '../components/SmallCard';
import api from '../api';
import React from 'react';

export default class Trend extends React.Component {
  state = {
      trends: []
  }

  componentDidMount() {
      this.handleGetTrend();
  }

  handleGetTrend = () => {
    api.getTrend()
      .then(res => {
          console.log('Trends.js line 20: ', res[0].trends);
          this.setState({ 
              trends: res[0].trends
          });
      })
      .catch(err => console.log(err))
  };

  render() {
    const { trends } = this.state

    return (
      <ScrollView style={styles.background}>
        <Navbar source={require('../public/images/logo.png')} />
        <LargeCard
          image={require('../public/images/sampleImage(2).jpg')}
          title="Sample Article"
          searchPreview="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        {trends.map(trend => (
            <SmallCard
              key={trend.name}
              image={require('../public/images/sampleImage.jpg')}
              name={trend.name}
              url={trend.url}
              onPress={trend.url}
            />
          ))}
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