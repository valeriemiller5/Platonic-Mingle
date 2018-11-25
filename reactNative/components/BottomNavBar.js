import * as React from 'react'
import { StyleSheet } from 'react-native'
import { BottomNavigation, Text } from 'react-native-paper'

const HomeRoute = () => <Text>Home</Text>

const FavoritesRoute = () => <Text>Favorites</Text>

const ExploreRoute = () => <Text>Explore</Text>

const RecentsRoute = () => <Text>Recents</Text>

export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home', icon: 'home' },
      { key: 'favorites', title: 'Favorites', icon: 'favorite-border' },
      { key: 'recents', title: 'Recents', icon: 'history' },
      { key: 'explore', title: 'Explore', icon: 'search' }
    ]
  }

  _handleIndexChange = index => this.setState({ index })

  _renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    favorites: FavoritesRoute,
    recents: RecentsRoute,
    explore: ExploreRoute
  })

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
        style={styles.bottom}
      />
    )
  }
}

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#e1e1e1'
  }
})