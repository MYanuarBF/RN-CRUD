import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import RootStack from './Navigator/RootStacks';
export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
