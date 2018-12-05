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
  Subtitle
} from 'native-base';
import React from 'react';

export default class Aboutme extends React.Component {
  state = {
    buttonPressed: false,
    firstName: '',
    lastName: '',
    age: '',
    sex: ''
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

  handleButtonPress = () => this.setState({ buttonPressed: true });

  render() {
    if (this.state.buttonPressed) {
      return (
        <ScrollView style={styles.background}>
          <Container style={{ padding: 15 }}>
            <Header span>
              <Left>
                <Button hasText transparent style={{ height: 30 }}>
                  <Icon name="ios-arrow-dropleft" />
                  <Text>Cancel</Text>
                </Button>
              </Left>
              <Body>
                <Title>Tell Us About Yourself</Title>
                <Subtitle>
                  Disclaimer: Platonic Mingle will not distribute your data to
                  third parties unless it's for money
                </Subtitle>
              </Body>
              <Right>
                <Button hasText transparent style={{ height: 30 }}>
                  <Text>Submit</Text>
                </Button>
              </Right>
            </Header>
            <Content>
              <Form>
                <Item floatingLabel rounded last>
                  <Label>Your First Name</Label>
                  <Input />
                </Item>
                <Item floatingLabel rounded last>
                  <Label>Your Last Name</Label>
                  <Input />
                </Item>
                <Item style={{ paddingTop: 5 }} picker>
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
                    <Picker.Item label="Male" value="key0" />
                    <Picker.Item label="Female" value="key1" />
                    <Picker.Item label="Both" value="key2" />
                    <Picker.Item label="Neither" value="key3" />
                    <Picker.Item label="Trans" value="key4" />
                    <Picker.Item label="Unsure" value="key5" />
                    <Picker.Item label="Nonyabusiness" value="key6" />
                  </Picker>
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
