import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
/** Components */
import { IconButton } from 'react-native-paper';
/** Screens */
import HomeScreen from '../screens/chat/HomeScreen';
import RoomScreen from '../screens/chat/RoomScreen';
import AddRoomScreen from '../screens/chat/AddRoomScreen';
import AddUserScreen from '../screens/chat/AddUserScreen';
import Home from './../screens/Home'
import ListarPaciente from './../screens/ListarPaciente'
import RegistrarPaciente from './../screens/RegistrarPaciente'

const ChatAppStack = createStackNavigator();
const ModalStack = createStackNavigator();

logout = () => {
    return true;
}

const ChatApp = () => {

  return(
    <ChatAppStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'rgb(15, 121, 134)',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontSize: 22,
        }
      }}>
        <ChatAppStack.Screen name='HomeScreen' component={HomeScreen} options={({ navigation }) => ({
          headerRight: () => (
            <IconButton icon='message-plus' size={28} color='#ffffff' onPress={() => navigation.navigate('AddRoom')} />
          )
        })} />
        <ChatAppStack.Screen name='Room'component={RoomScreen} options={({ route, navigation }) => ({
          title: route.params.threads.name,
          headerRight: () => (
            <IconButton icon='account-plus' size={28} color='#ffffff' onPress={() => navigation.navigate('AddUser', {thread: route.params.threads})} />
          ),
        })} />
        <ChatAppStack.Screen name='AddUser'component={AddUserScreen} options={({ route }) => ({
          title: 'Adicione um novo usuário'
        })} />
    </ChatAppStack.Navigator>
  );
}

export default HomeStack = () => {
  return (
    <ModalStack.Navigator mode='modal' headerMode='none'>
    <ModalStack.Screen name='Home' component={Home} />
    <ModalStack.Screen name='RegistrarPaciente' component={RegistrarPaciente} />
    <ModalStack.Screen name='ListarPaciente' component={ListarPaciente} />
    <ModalStack.Screen name='ChatApp' component={ChatApp} />
    <ModalStack.Screen name='AddRoom' component={AddRoomScreen} />
    </ModalStack.Navigator>
  );
}