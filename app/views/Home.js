import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Button
} from 'react-native';
import Login from './Login';
import Logout from './Logout';
import { BottomNavigation } from 'react-native-paper';
import api from '../api.js';
import Trend from './Trend';
import Aboutme from './Aboutme';
import Favorites from './Favorites';
import * as Font from 'expo-font'

await Font.loadAsync({
  Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
  Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf')
});

const HomeRoute = props => (
  <SafeAreaView style={{ flex: 1 }}>
    {/* <Button title="Logout" onPress={props.handleLogout} /> */}
    <Trend user={props.user.local.username} />
  </SafeAreaView>
);

const FavoritesRoute = props => (
  <SafeAreaView style={{ flex: 1 }}>
    {/* <Button title="Logout" onPress={props.handleLogout} /> */}
    <Favorites user={props.user.local.username} favs={props.favs} />
  </SafeAreaView>
);

const ExploreRoute = props => (
  <SafeAreaView style={{ flex: 1 }}>
    {/* <Button
      title="Logout"
      onPress={props.handleLogout}
      user={props.user.local.username}
    /> */}
    <Aboutme />
  </SafeAreaView>
);

const MingleRoute = props => (
  <SafeAreaView>
    {/* <Button title="Logout" onPress={props.handleLogout} /> */}
    <Trend />
  </SafeAreaView>
);

const LogOut = props => (
  <SafeAreaView>
    <Logout {...props} />
  </SafeAreaView>
)

class Home extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home', icon: 'home' },
      { key: 'favorites', title: 'Favorites', icon: 'favorite-border' },
      { key: 'mingle', title: 'Mingle', icon: 'share' },
      { key: 'profile', title: 'About Me', icon: 'person-outline' },
      { key: 'logout', title: 'Log Out', icon: 'power-settings-new' }
    ],
    user: null,
    username: '',
    password: '',
    favorites: []
  };

  handleGetFav = async () => {
    const favorites = await api.getFav({ user: this.props.user });
    this.setState({ favorites });
  };

  componentDidMount = async () => {
    this.getUser();
  };

  _handleIndexChange = index => {
    this.setState({ index });
    console.log(index);
    if (index === 1) {
      this.handleGetFav();
    }
  };

  _renderScene = BottomNavigation.SceneMap({
    home: props => (
      <HomeRoute {...props} handleLogout={this.logout} user={this.state.user} />
    ),
    favorites: props => (
      <FavoritesRoute
        {...props}
        // handleLogout={this.logout}
        user={this.state.user}
        favs={this.state.favorites}
      />
    ),
    mingle: props => (
      <MingleRoute
        {...props}
        // handleLogout={this.logout}
        user={this.state.user}
      />
    ),
    profile: props => (
      <ExploreRoute
        {...props}
        user={this.state.user}
        // handleLogout={this.logout}
      />
    ),
    logout: () => <LogOut handleLogout={this.logout} />
  });

  updateUsername = username => {
    this.setState({ username });
    console.log(username);
  };

  updatePassword = password => {
    this.setState({ password });
    console.log(password);
  };

  getUser = async () => {
    const user = await api.getUser();
    this.setState({ user });
    if (user) {
      this.setState({ index: 0 });
      this.handleGetFav();
    }
  };

  signup = async () => {
    console.log('signing up...');
    try {
      await api.signup(this.state.username, this.state.password);
      this.getUser();
    } catch (err) {
      console.log(err);
    }
  };

  login = async () => {
    console.log('logging in...');
    try {
      await api.login(this.state.username, this.state.password);
      this.getUser();
    } catch (err) {
      console.error(err);
    }
  };

  logout = async () => {
    await api.logout();
    this.setState({ user: null });
  };

  render = () => {
    if (this.state.user) {
      return (
        <BottomNavigation
          navigationState={this.state}
          onIndexChange={this._handleIndexChange}
          renderScene={this._renderScene}
          onPress={this.handlePress}
        />
      );
    } else {
      return (
        <SafeAreaView>
          <Login
            handleLogin={this.login}
            updateUsername={this.updateUsername}
            updatePassword={this.updatePassword}
            handleSignup={this.signup}
          />
        </SafeAreaView>
      );
    }
  };
}

export default Home;

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
  },
  logout: {
    backgroundColor: '#c0c0c0',
    color: 'white',
    marginTop: 2
  }
});
