import { ScrollView, View, StyleSheet } from 'react-native';
import Navbar from '../components/TopNavbar';
import LargeCard from '../components/LargeCard';
import {
  Content,
  Container,
  Header,
  Icon,
  Button,
  Text,
  Form,
  Item,
  Input,
  Label,
  Picker,
  Left,
  Right,
  Body,
  Title,
  Subtitle,
  Textarea
} from 'native-base';
import React from 'react';
import api from '../api.js';

export default class Aboutme extends React.Component {
  state = {
    user: null,
    buttonPressed: false,
    firstName: '',
    lastName: '',
    age: '',
    bio: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }

  componentDidMount = async () => this.getUser();

  handleButtonPress = () => this.setState({ buttonPressed: true });

  handleBack = () => this.setState({ buttonPressed: false });

  handleSubmit = () => {
    console.log('submitted!');
    try {
      api.setProfile({
        userName: this.state.user,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        age: this.state.age,
        gender: this.state.selected2,
        bio: this.state.bio
      });
    } catch (err) {
      console.log(err);
    }
    this.setState({ buttonPressed: false });
  };

  updateFirst = text => {
    console.log(text);
    this.setState({ firstName: text });
  };
  updateLast = text => {
    console.log(text);
    this.setState({ lastName: text });
  };
  updateAge = text => {
    console.log(text);
    this.setState({ age: text });
  };
  updateBio = text => {
    console.log(text);
    this.setState({ bio: text });
  };

  getUser = async () => {
    const user = await api.getUser();
    this.setState({ user: user.local.username });
  };

  render() {
    if (this.state.buttonPressed) {
      return (
        <ScrollView style={styles.background}>
          <Container style={{ padding: 10 }}>
            <Header span>
              <Left>
                <Button
                  onPress={this.handleBack}
                  hasText
                  transparent
                  style={{ height: 100 }}
                >
                  <Icon name="ios-arrow-dropleft" />
                  <Text>Cancel</Text>
                </Button>
              </Left>
              <Body>
                <Text style={{ width: 200, paddingRight: 15, marginBottom: 5 }}>
                  Tell Us About You
                </Text>
                <Subtitle>
                  Disclaimer: Platonic Mingle will not distribute your data to
                  third parties unless it's for money
                </Subtitle>
              </Body>
              <Right>
                <Button
                  onPress={this.handleSubmit}
                  hasText
                  transparent
                  style={{ height: 100 }}
                >
                  <Text>Submit</Text>
                </Button>
              </Right>
            </Header>
            <Content>
              <Form style={{ paddingHorizontal: 50 }}>
                <Item floatingLabel rounded last>
                  <Label>Your First Name</Label>
                  <Input onChangeText={this.updateFirst} />
                </Item>
                <Item floatingLabel rounded last>
                  <Label>Your Last Name</Label>
                  <Input onChangeText={this.updateLast} />
                </Item>
                <Item floatingLabel rounded last>
                  <Label>Your Age</Label>
                  <Input onChangeText={this.updateAge} />
                </Item>
                <Item style={{ paddingTop: 10 }} picker>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="ios-man" />}
                    style={{ width: 200 }}
                    placeholder="Select Your Gender"
                    placeholderStyle={{ color: '#bfc6ea' }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.selected2}
                    onValueChange={this.onValueChange2.bind(this)}
                  >
                    <Picker.Item label="Male" value="Male" />
                    <Picker.Item label="Female" value="Female" />
                    <Picker.Item label="Both" value="Both" />
                    <Picker.Item label="Neither" value="Neither" />
                    <Picker.Item label="Trans" value="Trans" />
                    <Picker.Item label="Unsure" value="Unsure" />
                    <Picker.Item label="Nonyabusiness" value="Nonyabusiness" />
                  </Picker>
                </Item>
                <Item style={{ paddingRight: 10, paddingTop: 20 }}>
                  <Textarea
                    style={{ width: '100%' }}
                    onChangeText={this.updateBio}
                    rowSpan={7}
                    bordered
                    placeholder="Short Bio"
                  />
                </Item>
              </Form>
            </Content>
          </Container>
        </ScrollView>
      );
    } else {
      return (
        <ScrollView style={styles.background}>
          <Navbar source={require('../public/images/logo.png')} />
          <LargeCard
            image={require('../public/images/sampleImage(2).jpg')}
            title="Wow... Such Empty"
          />
          <View style={{ marginBottom: 60 }} />
          <Container>
            <View>
              <Button
                onPress={this.handleButtonPress}
                iconLeft
                success
                large
                block
              >
                <Icon name="ios-cog" />
                <Text>Set Up Profile</Text>
              </Button>
            </View>
          </Container>
        </ScrollView>
      );
    }
  }
}

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
  container: {
    justifyContent: 'center',
    flex: 1
  }
});