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
  </ScrollView>
);

export default Login;
//   handleLogin = () => {
//     console.log('handling login');
//     console.log(this.props);
//   };

//   handleReset() {
//     console.log('handling reset');
//   }

//   render() {
//     return (
//       <ScrollView style={styles.scroll}>
//         <Container>
//           <Label text="Username or Email" />
//           <TextInput style={styles.textInput} />
//         </Container>
//         <Container>
//           <Label text="Password" />
//           <TextInput secureTextEntry={true} style={styles.textInput} />
//         </Container>
//         <Container>
//           <Button
//             label="Submit"
//             styles={{ button: StyleSheet.alignRight, label: styles.label }}
//             onPress={this.handleLogin}
//           />
//         </Container>
//         <Container>
//           <Button
//             label="Forgot Password"
//             styles={{ button: StyleSheet.alignRight, label: styles.label }}
//             onPress={this.handleReset}
//           />
//         </Container>
//       </ScrollView>
//     );
//   }
// }

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
