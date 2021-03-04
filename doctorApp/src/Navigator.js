import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './screens/auth/Login'
import SignUp from './screens/auth/SignUp';
import Forgot from './screens/auth/Forgot';
import Profile from './screens/Profile'
import Splash from './screens/Splash'
import RegistrarPaciente from './screens/RegistrarPaciente';
import ListarPaciente from './screens/ListarPaciente';
import HomeScreen from './screens/chat/HomeScreen';

const authRouter = createStackNavigator({
  Login: { screen: Login, navigationOptions: { title: 'Login' } },
  SignUp: { screen: SignUp, navigationOptions: { title: 'Cadastro' } },
  Forgot: { screen: Forgot, navigationOptions: { title: 'Redefinição de Senha' } },
}, {
  initialRouteName: 'Login'
})


const screensCards = createStackNavigator({
  Profile: Profile,
  Chat: {screen: HomeScreen, navigationOptions:{title: 'Chat'}},
  RegistrarPaciente: { screen: RegistrarPaciente, navigationOptions: { title: 'Registrar paciente'} },
  ListarPaciente: { screen: ListarPaciente, navigationOptions: { title: 'Listar Paciente' } }
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
