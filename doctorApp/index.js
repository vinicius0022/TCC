import React from 'react'
import { Provider } from 'react-redux'
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import axios from 'axios'
import storeConfig from './src/store/storeConfig'
import { LogBox } from 'react-native';

// Ignore log notification by message
LogBox.ignoreAllLogs();


axios.defaults.baseURL = 'https://doctorapp-83f12-default-rtdb.firebaseio.com'

const store = storeConfig()
const Redux = () => (
    <Provider store={store}>
        <App />
        
    </Provider>
) 

AppRegistry.registerComponent(appName, () => Redux);
