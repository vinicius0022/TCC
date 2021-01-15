 import React, { Component } from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'
import Login from './screens/Login'
import Profile from './screens/Profile'
import Splash from './screens/Splash'
import SignUp from './screens/SignUp';
import Channels from './screens/Channels';
import Feedback from './screens/Feedback';
import Settings from './screens/Settings';
import Forgot from './screens/Forgot';
import RegistrarPaciente from './screens/RegistrarPaciente';

const authRouter = createStackNavigator({
    Login: {screen: Login, navigationOptions: {title: 'Login'}},
    SignUp:{screen: SignUp, navigationOptions: {title: 'Cadastro'}},
    Forgot:{screen: Forgot, navigationOptions: {title: 'Redefinição de Senha'}},
  }, {
    initialRouteName: 'Login'
  })

  
    const screensCards = createStackNavigator({
      Profile: Profile,  
      RegistrarPaciente: RegistrarPaciente,
      Settings: Settings
  
    }, {
        initialRouteName: 'Profile'
    })

const loginOrProfileRouter = createSwitchNavigator(
    {
      ScreensCards: screensCards,
      Auth: authRouter
  }, {
    initialRouteName: 'Auth'
  })

const AppContainer = createAppContainer(loginOrProfileRouter);


const SplashRouter = createSwitchNavigator({
    Splash: Splash,
    App: AppContainer
}, {
    initialRouteName: 'Splash'
})

const SplashContainer = createAppContainer(SplashRouter)

export default SplashContainer
