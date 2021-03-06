import React, { Component, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack';
import AuthStack from './AuthStack'
import {connect} from 'react-redux'
import user from './../store/reducers/User'

class Routes extends Component{

  render(){
    return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
    );
  }
}

export default Routes;