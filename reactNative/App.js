import React, { Component } from 'react'
// import { createStackNavigator, AppRegistry, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'
// import Home from './views/Home'
// import Details from './views/Details'
// import Results from './views/Results'
import Login from './views/Login'

export default class ReactNativeCommonScreen extends Component {
  render() {
    return <Login />
  }
}

// const HomeStack = createStackNavigator({
//   HomeList: {
//     screen: Home,
//     navigationOptions: {
//       title: 'Search Topic'
//     }
//   },
//   Details: {
//     screen: Details,
//     navigationOptions: ({ navigation }) => ({
//       title: `${navigation.state.params.title}`
//     })
//   }
// })

// const ResultsStack = createStackNavigator ({
//   ResultsList: {
//     screen: Results,
//     navigationOptions: {
//       title: `Results`
//     },
//     ResultsDetails: {
//       screen: Results,
//       navigationOptions: ({ navigation }) => ({
//         title: `${navigation.state.params.title}`
//       })
//     }
//   }
// })

// export default createAppContainer(createMaterialTopTabNavigator({
//   Home: { screen: HomeStack },
//   Results: { screen: ResultsStack }
// }))
