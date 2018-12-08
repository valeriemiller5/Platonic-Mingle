import { SafeAreaView, ScrollView, View, StyleSheet } from 'react-native';
import Navbar from '../components/TopNavbar';
import React from 'react';
import {
  Container,
  Header,
  Tab,
  Tabs,
  TabHeading,
  Icon,
  Text
} from 'native-base';
import Tab2 from './Twittertrend';
import Tab1 from './Buzzfeed';
// import Tab3 from './tabThree';

export default class Trend extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.background}>
        <Navbar source={require('../public/images/logo.png')} />
        <Container style={{ flex: 1 }}>
          <Tabs>
            <Tab
              heading={
                <TabHeading>
                  <Icon name="ios-paper" />
                  <Text>Buzzfeed News</Text>
                </TabHeading>
              }
            >
              <Tab1 user={this.props.user} />
            </Tab>
            <Tab
              heading={
                <TabHeading>
                  <Icon name="logo-twitter" />
                  <Text>Twitter Trends</Text>
                </TabHeading>
              }
            >
              <Tab2 user={this.props.user} />
            </Tab>
          </Tabs>
        </Container>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#e1e1e1',
    flex: 1
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#e1e1e1'
  }
});
