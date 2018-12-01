import React from "react";
import { ScrollView, SafeAreaView, Text, AsyncStorage } from "react-native";

import ListItem from "../components/ListItem";

class Favorites extends React.Component {
  state = {
    favs: {}
  };

  componentDidMount = async () => {
    let favorites = (await AsyncStorage.getItem("favorites")) || {};
    typeof favorites === "string"
      ? (favorites = JSON.parse(favorites))
      : favorites;
    this.setState({ favs: favorites });
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          {Object.keys(this.state.favs).map(movie => (
            <Text key={movie.imdbID}>{movie.Title}</Text>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Favorites;
