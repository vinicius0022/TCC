import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  View,
  StatusBar,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  SafeAreaView
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {connect} from 'react-redux'
import LogoHeader from "../../components/LogoHeader";
import HomeStack from "../../navigation/HomeStack";
import { NavigationContainer } from '@react-navigation/native';
import { login } from '../../store/actions/User'
import { LogBox } from 'react-native';



class Login extends Component {

  state = {
    nome: '',
    email: '',
    senha: ''
  }

  
  login = () =>{
    this.props.onLogin({...this.state})
  }

  render() {
    return (
          <SafeAreaView style={styles.container}>
              
         <ImageBackground
            style={styles.rect}
            imageStyle={styles.rect_imageStyle}
            source={require("../../../assets/images/Gradient_BlSPiJo.png")}
          >
            <ScrollView style={styles.ContainerColumn}>

            <LogoHeader/>
              <View style={styles.form}>
                  <View style={styles.input}>
                    <TextInput
                    keyboardType="email-address"
                      placeholder='E-mail'
                      placeholderTextColor="rgba(255,255,255,1)"
                      secureTextEntry={false}
                      style={styles.textInput}
                      value={this.state.email}
                      onChangeText={email => this.setState({email})} 
                    ></TextInput>
                  </View>
                  <View style={styles.input}>
                    <TextInput
                      placeholder="Senha"
                      placeholderTextColor="rgba(255,255,255,1)"
                      onChangeText={senha => this.setState({senha})} 
                      secureTextEntry={true}
                      style={styles.textInput}
                    ></TextInput>
                  </View>
                
                <View style={styles.flexColumnFiller}></View>
                </View>

                </ScrollView>

                <TouchableOpacity
                  onPress={this.login}
                  style={styles.button}
                >
                  <Text style={styles.text2}>Acessar</Text>
                </TouchableOpacity>

            <View style={styles.flexColumnFiller}></View>
            <View style={styles.footerTexts}>
            
              <TouchableOpacity
                onPress={() => {this.props.navigation.navigate('SignUp')}}
                style={styles.button2}
                >
                <View style={styles.createAccountFiller}></View>
                <Text style={styles.createAccount}>Criar conta</Text>
  
              </TouchableOpacity>

              <View style={styles.button2Filler}></View>
              <TouchableOpacity
                onPress={() => {this.props.navigation.navigate('Forgot')}}
                style={styles.button2}
                >
                <View style={styles.createAccountFiller}></View>
                <Text style={styles.createAccount}>Esqueceu a senha</Text>
  
              </TouchableOpacity>
            </View>
  
          </ImageBackground>
        </SafeAreaView>
    );
  }
  componentDidUpdate = prevProps => { 

    if(prevProps.isAuthentic && !this.props.isAuthentic){

      this.props.navigation.navigate('Home')
    }
}

}



const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  rect: {
    marginTop: 5,
    flex: 1
  },
  logo: {
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').width / 4,
    alignSelf: "center"
  },
  text3: {
    color: "rgba(255,255,255,255)",
    fontSize: 25,
    marginBottom: 4
  }, text3: {
    color: "rgba(255,255,255,255)",
    fontSize: 20,
    marginBottom: 4
  },
  rect7: {
    height: 8,
    backgroundColor: "#25cdec",
    marginRight: 4
  },
  text3Column: {
    marginBottom: 6,
    marginLeft: 2,
    marginRight: -1
  },
  form: {
    height: 250,
    marginTop: 59
  },
  textInput: {
    height: 35,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 11,
    marginLeft: 11,
    marginTop: 14
  },
  input: {
    height: 59,
    backgroundColor: "rgba(253,251,251,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 27
  },
  button: {
    height: 59,
    width: Dimensions.get('window').width / 4 * 3,
    backgroundColor: "rgba(31,178,204,1)",
    borderRadius: 5,
    justifyContent: "center",
    alignItems:"center",
    alignSelf:"center"
  },
  text2: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  ContainerColumn: {
    marginTop: 10,
    marginLeft: 41,
    marginRight: 41
  },
  flexColumnFiller: {
    flex: 1
  },
  footerTexts: {
    height: 14,
    flexDirection: "row",
    marginBottom: 50,
    marginLeft: 50,
    marginRight: 50,
  },
  button2: {
    color: "rgba(255,255,255,0.5)",
    width: 200,
    height: 14,
    alignSelf: "center",
  },
  createAccountFiller: {
    flex: 1
  },
  createAccount: {
    color: "rgba(255,255,255,0.5)"
  },
  button2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  needHelp: {
    color: "rgba(255,255,255,0.5)",
    alignSelf: "flex-end",
    marginRight: -1
  }
});



const mapStateToProps = ({user}) =>{
    
  return{
    isAuthentic: user.isAuthentic
  }
}

const mapDispatchToProps = dispatch => {
  
  return {
      onLogin: user => dispatch(login(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)