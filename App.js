import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FbScreen from './screens/FbScreen';
import InstaScreen from './screens/InstaScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-naviagtion-tabs';

export default class App extends React.Component() {
  render(){
  return (
    <AppContainer/>
  );
}
}

const TabNavigator= createBottomTabNavigator(
  {
    Facebook: {screen:FbScreen},
    Instagram: {screen:InstaScreen}
  }
)
const AppContainer= createAppContainer(
  TabNavigator
)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
