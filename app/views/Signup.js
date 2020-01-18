import React, { Component } from "react";
import { StyleSheet, TextInput, ScrollView, Button } from "react-native";
import Container from "../components/Container";
import Label from "../components/Label";
import * as Font from 'expo-font'

await Font.loadAsync({
  Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
  Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf')
});

export default class Login extends Component {
  state = {
    Username: "",
    Password: ""
  };

  render() {
    return (
      <ScrollView style={styles.scroll}>
        <Container>
          <Label text="SIGN UP TEST" />
          <TextInput style={styles.textInput} />
        </Container>
        <Container>
          <Label text="Password" />
          <TextInput secureTextEntry={true} style={styles.textInput} />
        </Container>
        <Container>
          <Button
            label="Log In"
            styles={{ button: StyleSheet.alignRight, label: styles.label }}
          />
          <Button
            label="Forgot Password"
            styles={{ button: StyleSheet.alignRight, label: styles.label }}
          />
        </Container>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "#AFC5CF",
    paddingTop: 100,
    padding: 30,
    flexDirection: "column"
  },
  label: {
    color: "#0d8898",
    fontSize: 20
  },
  alignRight: {
    alignSelf: "flex-end"
  }
});
