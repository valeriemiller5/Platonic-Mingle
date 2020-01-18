import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import * as Font from 'expo-font'
import Ionicons from 'react-native-vector-icons/Ionicons';
import api from '../api';

await Font.loadAsync({
  Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
  Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf')
});

export default class LikeIcon extends React.Component {
  constructor() {
    super();
    this.state = { heartIcon: 'ios-heart-empty', like: false };
  }

  componentDidMount = () => {
    this.setState({
      id: this.props.id,
      title: this.props.name,
      image: this.props.image,
      url: this.props.url,
      description: this.props.description,
      user: this.props.user
    });
  };

  toggleLike(props) {
    if (this.state.like) {
      this.handleSaveFav();
      this.setState({ heartIcon: 'ios-heart', like: false });
      {
        props.onPress;
      }
    } else if (!this.state.like) {
      this.setState({ heartIcon: 'ios-heart-empty', like: true });
    }
  }

  handleSaveFav = () => {
    console.log(`title:${this.state.title}`);
    console.log(`user:${this.state.user}`);
    try {
      api.createFav({
        user: this.state.user,
        id: this.state.id,
        title: this.state.title,
        image: this.state.image,
        url: this.state.url,
        description: this.state.description
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <View style={styles.heartSection}>
        <Ionicons
          onPress={this.toggleLike.bind(this)}
          name={this.state.heartIcon}
          size={25}
          style={{
            color: this.state.heartIcon === 'ios-heart' ? '#3b5b9d' : '#3b5b9d'
          }}
        />
      </View>
    );
  }
}
const styles = {
  heartSection: {
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    paddingTop: 1,
    paddingBottom: 3,
    paddingLeft: 15
  }
};
