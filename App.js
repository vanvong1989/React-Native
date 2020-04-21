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
  StatusBar,
} from 'react-native';

//import Login from './src/pages/Login';
//import Signup from './src/pages/Signup';
import Routes from './src/Routes';


export default class App extends Component {
  render(){
  return (
     <View style = {styles.container}>
       <StatusBar
        backgroundColor = "#3333CC"
        barStyle = "light-content"
       />
       <Routes />
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
  }
});

