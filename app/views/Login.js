import React, { Component } from "react";
import { StyleSheet, TextInput, ScrollView } from "react-native";

import Container from "../components/Container";
import Button from "../components/NavButton";
import Label from "../components/Label";

export default class Login extends Component {
  handleLogin() {
    console.log("handling login");
    this.props.logIn();
  }

  render() {
    return (
      <ScrollView style={styles.scroll}>
        <Container>
          <Label text="Username or Email" />
          <TextInput style={styles.textInput} />
        </Container>
        <Container>
          <Label text="Password" />
          <TextInput secureTextEntry={true} style={styles.textInput} />
        </Container>
        <Container>
          <Button
            label="Submit"
            styles={{ button: StyleSheet.alignRight, label: styles.label }}
            onPress={this.handleLogin}
          />
        </Container>
        <Container>
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
