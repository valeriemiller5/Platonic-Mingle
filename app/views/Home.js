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
import { BottomNavigation } from 'react-native-paper';
import api from '../api.js';
import Kitty from './Kitty';
import Trend from './Trend';

const HomeRoute = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <Button title="Logout" onPress={props.handleLogout} />
    <Trend />
  </SafeAreaView>
);

const FavoritesRoute = props => (
  <SafeAreaView>
    <Button title="Logout" onPress={props.handleLogout} />
    <Kitty />
  </SafeAreaView>
);

const ExploreRoute = props => (
  <SafeAreaView>
    <Button title="Logout" onPress={props.handleLogout} />
    <Trend />
  </SafeAreaView>
);

const MingleRoute = props => (
  <SafeAreaView>
    <Button title="Logout" onPress={props.handleLogout} />
    <Kitty />
  </SafeAreaView>
);

class Home extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home', icon: 'home' },
      { key: 'favorites', title: 'Favorites', icon: 'favorite-border' },
      { key: 'mingle', title: 'Mingle', icon: 'share' },
      { key: 'profile', title: 'About Me', icon: 'person-outline' }
    ],
    user: null,
    username: '',
    password: ''
  };

  componentDidMount = async () => {
    this.getUser();
  };

  _handleIndexChange = index => {
    this.setState({ index });
    console.log(index);
  };

  _renderScene = BottomNavigation.SceneMap({
    home: props => <HomeRoute {...props} handleLogout={this.logout} />,
    favorites: props => (
      <FavoritesRoute {...props} handleLogout={this.logout} />
    ),
    mingle: props => <MingleRoute {...props} handleLogout={this.logout} />,
    profile: props => <ExploreRoute {...props} handleLogout={this.logout} />
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
    } else {
    }
    console.log(user);
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
  }
});
