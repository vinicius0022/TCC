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
  SafeAreaView,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {connect} from 'react-redux'

import { forgot } from '../../store/actions/User'


class Forgot extends Component {

  state = {
    email: '',
  }

  
  forgot = () => {
    this.props.onForgot({...this.state})
    this.props.navigation.navigate('Login')

  }

  render() {
    return (
      <SafeAreaView style={styles.root}>
        <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
        <View style={styles.background}>
         <ImageBackground
            style={styles.rect}
            imageStyle={styles.rect_imageStyle}
            source={require("../../../assets/images/Gradient_BlSPiJo.png")}
            >
            <ScrollView>
            <View style={styles.logoColumn}>
              <View style={styles.logo}>
                
              <Image style={styles.logo} source={require("../../../assets/images/icon.png")}/>
              <View style={styles.endWrapperFiller}></View>
                <View style={styles.text3Column}>
                  <Text style={styles.text3}>Doctor App</Text>
                  <View style={styles.rect7}></View>
                </View>
              </View>
              <View style={styles.form}>
                <View style={styles.emailColumn}>
                  <View style={styles.email}>
                    <TextInput
                    keyboardType="email-address"
                      placeholder='E-mail'
                      placeholderTextColor="rgba(255,255,255,1)"
                      secureTextEntry={false}
                      style={styles.emailInput}
                      value={this.state.email}
                      onChangeText={email => this.setState({email})} 
                    ></TextInput>
                  </View>
                 </View>
                <TouchableOpacity
                  onPress={this.forgot}
                  style={styles.button}
                >
                  <Text style={styles.text2}>Enviar</Text>
                </TouchableOpacity>
              </View>
            </View> 
        </ScrollView>
          </ImageBackground>
        </View>
      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({


  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  background: {
    flex: 1
  },
  rect: {
    flex: 1
  },
  rect_imageStyle: {},
  logo: {
    width: 135,
    height: 135,
    alignSelf: "center"
  },
  endWrapperFiller: {
    flex: 1
  },
  text3: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
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
  email: {
    height: 59,
    backgroundColor: "rgba(251,247,247,0.25)",
    borderRadius: 5,
    flexDirection: "row"
  },
  icon22: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    lineHeight: 30,
    marginLeft: 20,
    alignSelf: "center"
  },
  emailInput: {
    height: 35,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 11,
    marginLeft: 11,
    marginTop: 14
  },
  password: {
    height: 59,
    backgroundColor: "rgba(253,251,251,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 27
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 20,
    alignSelf: "center"
  },
  passwordInput: {
    height: 35,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 17,
    marginLeft: 8,
    marginTop: 14
  },
  emailColumn: {},
  emailColumnFiller: {
    flex: 1
  },
  button: {
    marginTop: 15,
    height: 59,
    backgroundColor: "rgba(31,178,204,1)",
    borderRadius: 5,
    justifyContent: "center"
  },
  text2: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  logoColumn: {
    marginTop: 130,
    marginLeft: 41,
    marginRight: 41
  },
  logoColumnFiller: {
    flex: 1
  },
  footerTexts: {
    height: 14,
    flexDirection: "row",
    marginBottom: 36,
    marginLeft: 37,
    marginRight: 36
  },
  button2: {
    width: 104,
    height: 14,
    alignSelf: "center",
  },
  button3: {
    width: 104,
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





const mapDispatchToProps = dispatch => {
  
  return {
      onForgot: user => dispatch(forgot(user))
  }
}

export default connect(null, mapDispatchToProps)(Forgot)