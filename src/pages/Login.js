/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Login extends Component {
  render(){
  return (
     <View style = {styles.container}>
         <Logo />
         <Form type = "Login" />
         <View style = {styles.signupTextCont}>
          <Text style = {styles.signupText}>Don't have an account yet?</Text>
          <Text style = {styles.singupButton}>  Signup</Text>
         </View>
     </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455a64',
    alignItems: 'center',
   justifyContent: 'center',
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
   justifyContent: 'center',
   paddingVertical: 16,
   flexDirection: 'row',
  },
  signupText: {
   color: 'rgba(255, 255, 255, 0.7)',
   fontSize: 18,
  },
  singupButton: {
   color: '#ffffff',
   fontSize: 16,
   fontWeight: '500',
  },
});

