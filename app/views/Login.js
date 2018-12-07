import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  ImageBackground,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import Container from '../components/Container';
import Button from '../components/NavButton';
import Label from '../components/Label';

const Login = props => (
  <ImageBackground
    source={require('../public/images/loginBackground.jpg')}
    style={{ resizeMode: 'cover' }}
  >
    <View
      style={{
        height: '30%',
        resizeMode: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100
      }}
    >
      <Image
        style={styles.logo}
        source={require('../public/images/logo.png')}
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text
          style={{
            color: 'white',
            paddingTop: 5,
            paddingBottom: 1,
            fontSize: 18,
            fontWeight: 'bold'
          }}
        >
          Who Says Mingling Is Hard?
        </Text>
      </View>
    </View>
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      style={styles.scroll}
    >
      <Container>
        <Label text="Username or Email" />
        <TextInput
          style={styles.textInput}
          onChangeText={props.updateUsername}
        />
        <Label text="Password" />
        <TextInput
          secureTextEntry={true}
          style={styles.textInput}
          onChangeText={props.updatePassword}
        />
        <View style={{ marginTop: 30, flexDirection: 'column' }}>
          <Button
            label="Submit"
            styles={{ width: '30%' }}
            onPress={props.handleLogin}
          />
          <Button
            label="Sign Up"
            styles={{ width: '30%' }}
            onPress={props.handleSignup}
          />
          <TouchableOpacity
            style={{ paddingTop: 10 }}
            onPress={props.handeReset}
          >
            <Text style={{ textAlign: 'center', color: '#eaeaea' }}>
              Forgot Password
            </Text>
          </TouchableOpacity>
        </View>
      </Container>
    </ScrollView>
  </ImageBackground>
);

export default Login;

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: 'center'
  },
  scroll: {
    height: '70%',
    padding: 30,
    marginTop: 40,
    flexDirection: 'column'
  },
  textInput: {
    backgroundColor: '#0d8898',
    borderColor: '#0d8898',
    height: 30,
    borderRadius: 10,
    borderWidth: 1
  },
  logo: {
    width: '100%',
    height: 50,
    resizeMode: 'contain'
  },
  label: {
    color: '#0d8898',
    fontSize: 20
  },
  alignRight: {
    alignSelf: 'flex-end'
  }
});
