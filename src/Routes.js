/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { Router, Stack, Screen } from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';

export default class Routes extends Component {
  render(){
  return (
     <View style = {styles.container}>
         <Router>
         <Stack>
             <Screen key = "login" component = {Login} title = "Login"/>
             <Screen key = "register" component = {Signup} title = "Register"/>
         </Stack>
        </Router>
     </View>
  );
}
}

const styles = StyleSheet.create({
  
});

