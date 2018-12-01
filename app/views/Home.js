import React from "react";
import { ScrollView, View, Text, StyleSheet, SafeAreaView } from "react-native";
import Login from "./Login";
import { BottomNavigation } from "react-native-paper";

const HomeRoute = () => (
  <SafeAreaView>
    <Login />
  </SafeAreaView>
);

const FavoritesRoute = () => <Text>Favorites</Text>;

const ExploreRoute = () => <Text>Explore</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

class Home extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "login", title: "Login", icon: "home" },
      { key: "favorites", title: "Favorites", icon: "favorite-border" },
      { key: "recents", title: "Recents", icon: "history" },
      { key: "explore", title: "Explore", icon: "search" }
    ]
  };

  _handleIndexChange = index => {
    this.setState({ index });
    console.log(index);
  };

  _renderScene = BottomNavigation.SceneMap({
    login: HomeRoute,
    favorites: FavoritesRoute,
    recents: RecentsRoute,
    explore: ExploreRoute
  });

  handlePress = () => {};

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
        onPress={this.handlePress}
      />
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#e1e1e1"
  },
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#e1e1e1"
  }
});
