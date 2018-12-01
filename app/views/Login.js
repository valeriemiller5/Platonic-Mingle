import React, { Component } from 'react';
import { StyleSheet, TextInput, ScrollView } from 'react-native';

import Container from '../components/Container';
import Button from '../components/NavButton';
import Label from '../components/Label';

const Login = props => (
  <ScrollView style={styles.scroll}>
    <Container>
      <Label text="Username or Email" />
      <TextInput style={styles.textInput} onChangeText={props.updateUsername} />
    </Container>
    <Container>
      <Label text="Password" />
      <TextInput
        secureTextEntry={true}
        style={styles.textInput}
        onChangeText={props.updatePassword}
      />
    </Container>
    <Container>
      <Button
        label="Submit"
        styles={{ button: StyleSheet.alignRight, label: styles.label }}
        onPress={props.handleLogin}
      />
    </Container>
    <Container>
      <Button
        label="Forgot Password"
        styles={{ button: StyleSheet.alignRight, label: styles.label }}
        onPress={props.handleReset}
      />
    </Container>
    <Container>
      <Button
        label="Sign Up"
        styles={{ button: StyleSheet.alignRight, label: styles.label }}
        onPress={props.handleSignup}
      />
    </Container>
  </ScrollView>
);

export default Login;

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#AFC5CF',
    paddingTop: 100,
    padding: 30,
    flexDirection: 'column'
  },
  label: {
    color: '#0d8898',
    fontSize: 20
  },
  alignRight: {
    alignSelf: 'flex-end'
  }
});
