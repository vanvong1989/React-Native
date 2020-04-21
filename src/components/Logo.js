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
  Image,
} from 'react-native';


export default class Logo extends Component {
  render(){
  return (
     <View style = {styles.container}>
         <Image style = {{width: 40, height: 70}}
         source = {require('../images/logo.png')} />
         <Text style = {styles.logoText}>Wellcome to My app!</Text>
     </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
   justifyContent: 'flex-end',
  },
  logoText: {
      fontSize: 18,
      marginVertical: 15,
      color: 'rgba(255, 255, 255, 0.7)',
  }
});

