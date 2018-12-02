import { ScrollView, View, StyleSheet } from 'react-native';
import Navbar from '../components/TopNavbar';
import LargeCard from '../components/LargeCard';
import SmallCard from '../components/SmallCard';
import api from '../api';
import React from 'react';

export default class trend extends React.Component {
  state = {
      trends: []
  }

  componentDidMount() {
      this.handleGetTrend();
  }

  handleGetTrend = async () => {
    await api.getTrend()
    .then(res => {
        console.log('Trends.js line 20 ', res.data);
        this.setState({ 
            trends: res.data
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
            />
          ))}
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