import React from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class LikeIcon extends React.Component {
 constructor() {
   super();
   this.state = { heartIcon: 'ios-heart-empty', like: false };
 }
 toggleLike() {
   if (this.state.like) {
     this.setState({ heartIcon: 'ios-heart', like: false });
   } else if (!this.state.like) {
     this.setState({ heartIcon: 'ios-heart-empty', like: true });
   }
 }
 render() {
   return (
     <View style={styles.heartSection}>
       <TouchableWithoutFeedback onPress={this.toggleLike.bind(this)}>
         <Ionicons
           name={this.state.heartIcon}
           size={25}
           style={{ color: this.state.heartIcon === 'ios-heart' ? '#3b5b9d' : '#3b5b9d' }}
         />
       </TouchableWithoutFeedback>
     </View>
   )
 }
}
const styles = {
 heartSection: {
   alignItems: 'flex-start',
   justifyContent: 'space-around',
   paddingTop: 1,
   paddingBottom: 3,
   paddingLeft: 15,
 }
};