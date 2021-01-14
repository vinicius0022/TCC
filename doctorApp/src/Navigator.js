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
import Timeline from './screens/Timeline';
import Forgot from './screens/Forgot';

const authRouter = createStackNavigator({
    Login: {screen: Login, navigationOptions: {title: 'Login'}},
    SignUp:{screen: SignUp, navigationOptions: {title: 'Cadastro'}},
    Forgot:{screen: Forgot, navigationOptions: {title: 'Redefinição de Senha'}}
  }, {
    initialRouteName: 'Login'
  })


const loginOrProfileRouter = createSwitchNavigator(
    {
      Profile: Profile,
      Auth: authRouter
  }, {
    initialRouteName: 'Auth'
  })

const MenuRoutes = {

    Channels: {
        name: 'Channels',
        screen: Channels,
        navigationOptions:{
            title: 'Channels',
            tabBarIcon: ({ tintColor }) =>
            <Icon name='home' size={30} color={tintColor} />
        }
    },
    Feedback:{
        name: 'Feedback',
        screen: Feedback,
        navigationOptions:{
            title:'Feedback',
            tabBarIcon: ({tintColor}) =>
                <Icon name='camera' size={30} color={tintColor} />
        }
    },
    Profile:{
        name: 'Profile',
        screen: loginOrProfileRouter,
        navigationOptions: {
            title: 'Profile',
            tabBarIcon: ({tintColor}) =>
                <Icon name='user' size={30} color={tintColor} />
        }
    },
    Settings:{
        name: 'Settings',
        screen: Settings,
        navigationOptions: {
            title: 'Settings',
            tabBarIcon: ({tintColor}) =>
                <Icon name='user' size={30} color={tintColor} />
        }
    },
    Timeline:{
        name: 'Timeline',
        screen: Timeline,
        navigationOptions: {
            title: 'Timeline',
            tabBarIcon: ({tintColor}) =>
                <Icon name='user' size={30} color={tintColor} />
        }
    },
    
}

const MenuConfig = {

    initialRouteName: 'Feedback',
    tabBarOptions: {
        showLabel: false
    }
}

const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig);
const AppContainer = createAppContainer(loginOrProfileRouter);


const SplashRouter = createSwitchNavigator({
    Splash: Splash,
    App: AppContainer
}, {
    initialRouteName: 'Splash'
})

const SplashContainer = createAppContainer(SplashRouter)

export default SplashContainer
