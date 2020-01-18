import { SafeAreaView, ScrollView, View, StyleSheet } from 'react-native';
import Navbar from '../components/TopNavbar';
import LargeCard from '../components/LargeCard';
import SmallCard from '../components/SmallCard';
import api from '../api';
import React from 'react';
import * as Font from 'expo-font'

await Font.loadAsync({
  Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
  Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf')
});

export default class Twittertrend extends React.Component {
  state = {
    trends: []
  };

  componentDidMount() {
    this.handleGetTrend();
  }

  handleGetTrend = () => {
    api
      .getTrend()
      .then(res => {
        this.setState({
          trends: res[0].trends
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    const { trends } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.background}>
          {trends.map(trend => (
            <SmallCard
              key={trend.name}
              image={'../public/images/poop.png'}
              name={trend.name}
              url={trend.url}
              user={this.props.user}
            />
          ))}
          <View style={{ marginBottom: 60 }} />
        </ScrollView>
      </View>
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
