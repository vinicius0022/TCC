import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/auth/Login'
import SignUp from '../screens/auth/SignUp';
import Forgot from '../screens/auth/Forgot';
import Splash from '../screens/Splash'

const Stack = createStackNavigator();

export default function AuthStack() {
    return (
        
        <Stack.Navigator initialRouteName="Splash" headerMode="none">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Forgot" component={Forgot} />
            <Stack.Screen name="Splash" component={Splash} />
        </Stack.Navigator>
    );
}