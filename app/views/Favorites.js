import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Text,
  RefreshControl
} from 'react-native';
import React from 'react';
import api from '../api';
import FavCard from '../components/FavCard';
import * as Font from 'expo-font'

await Font.loadAsync({
  Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
  Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf')
});

export default class Trend extends React.Component {
  state = {
    user: null,
    favs: [],
    refreshing: false
  };

  componentDidMount = () => {
    this.setState({ user: this.props.user });
    this.handleGetFav();
  };

  handleGetFav = async () => {
    const favs = await api.getFav({ user: this.props.user });
    this.setState({ favs });
    console.log(favs);
  };

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.handleGetFav().then(() => {
      this.setState({ refreshing: false });
    });
  };
  render() {
    const { favs } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <Navbar source={require('../public/images/logo.png')} />
        <ScrollView
          style={styles.background}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
          {favs.map(trend => (
            <FavCard
              key={trend._id}
              image={trend.image}
              name={trend.title}
              url={trend.url}
              description={trend.description}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#e1e1e1'
  },
  safeArea: {
    flex: 1,
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
