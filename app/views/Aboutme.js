import { ScrollView, View, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Navbar from '../components/TopNavbar';
import ProfileCard from '../components/ProfileCard';
import {
  Content,
  Container,
  Header,
  Button,
  Text,
  Form,
  Item,
  Input,
  Label,
  Picker,
  Left,
  Right,
  Root,
  Body,
  Textarea,
  Title,
  Thumbnail,
  Card,
  CardItem,
  Icon
} from 'native-base';
import { AppLoading, Font } from 'expo';
import React from 'react';
import api from '../api.js';

export default class Aboutme extends React.Component {
  state = {
    user: null,
    buttonPressed: false,
    firstName: '',
    lastName: '',
    age: '',
    bio: '',
    hasProfile: false,
    setup: false,
    profile: false
  };

  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined,
      cogIcon: 'ios-cog',
      manIcon: 'ios-man',
      arroIcon: 'ios-arrow-dropleft',
      loading: true
    };
  }
  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }

  componentWillMount = async () => {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    });
    this.setState({ loading: false });
  };

  componentDidMount = async () => await this.getUser();

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
    this.setState({ profile: true });
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
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    if (!this.state.profile) {
      if (this.state.buttonPressed) {
        return (
          <ScrollView style={styles.background}>
            <Container style={{ padding: 10 }}>
              <Header span style={{ backgroundColor: '#add8e6' }}>
                <Left>
                  <Button
                    onPress={this.handleBack}
                    hasText
                    transparent
                    style={{ height: 100 }}
                  >
                    <Ionicons name={this.state.arroIcon} size={25} />
                    <Text>Cancel</Text>
                  </Button>
                </Left>
                <Body>
                  <Text
                    style={{
                      color: 'white',
                      marginLeft: 5,
                      fontSize: 20,
                      width: 200,
                      paddingRight: 15,
                      height: 50
                    }}
                  >
                    Tell Us About You
                  </Text>
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
                      Ionicons={
                        <Ionicons name={this.state.manIcon} size={25} />
                      }
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
                      <Picker.Item
                        label="Nonyabusiness"
                        value="Nonyabusiness"
                      />
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
            <ProfileCard
              userName={this.state.userName}
              firstName={this.firstName}
              lastName={this.lastName}
              age={this.age}
              gender={this.gender}
              bio={this.bio}
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
                  <Ionicons name={this.state.cogIcon} size={25} />
                  <Text>Set Up Profile</Text>
                </Button>
              </View>
            </Container>
          </ScrollView>
        );
      }
    } else {
      return (
        <Container>
          <Header span style={{ backgroundColor: '#add8e6' }}>
            <Left>
              <Thumbnail
                large
                source={require('../public/images/sampleImage(2).jpg')}
              />
            </Left>
            <Body>
              <Title>Welcome {this.state.firstName} !</Title>
            </Body>
            <Right />
          </Header>
          <Content style={{ flex: 1 }}>
            <Card style={{ flex: 1 }}>
              <CardItem>
                <Body>
                  <Image
                    source={require('../public/images/friendzone.jpg')}
                    style={{ height: 300, width: 380, flex: 1, padding: 10 }}
                  />
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent textStyle={{ color: '#87838B' }}>
                    <Icon name="logo-github" />
                    <Text>1,926 platonic friends</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
              {this.state.bio}
            </Text>
          </Content>
        </Container>
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
