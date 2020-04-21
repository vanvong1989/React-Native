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
  TextInput,
  TouchableOpacity,
} from 'react-native';


export default class Logo extends Component {
  render(){
  return (
     <View style = {styles.container}>
         <TextInput style = {styles.inputBox} underlineColorAndroid = 'rgba(0, 0, 0, 0)'
         placeholder = "Email" placeholderTextColor = "#ffffff" />
          <TextInput style = {styles.inputBox} underlineColorAndroid = 'rgba(0, 0, 0, 0)'
         placeholder = "Password" secureTextEntry = {true} placeholderTextColor = "#ffffff" />
         <TouchableOpacity style = {styles.button}>
  <Text style = {styles.buttonText}>{this.props.type}</Text>
         </TouchableOpacity>
     </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#455a64',
    alignItems: 'center',
   justifyContent: 'center',
  },
  inputBox: {
      width: 300,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      borderRadius: 35,
      paddingHorizontal: 16,
      fontSize: 16,
      color: '#ffffff',
      marginVertical: 10,
  },
  buttonText: {
      fontSize: 16,
      fontWeight: '500',
      color: '#ffffff',
      textAlign: 'center',
  },
  button: {
    backgroundColor: '#FF0000',
    borderRadius: 35,
    width: 300,
    marginVertical: 10,
    paddingVertical: 16,
  }
});

