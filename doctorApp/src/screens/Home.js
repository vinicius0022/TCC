import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getUser, logout } from '../store/actions/User'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, Dimensions} from 'react-native'
import LogoHeader from '../components/LogoHeader'
import { getThreads } from '../store/actions/Threads'


class Home extends Component {
    
    logout = () =>{
        this.props.onLogout()
        this.props.navigation.navigate('Login')
    }

    getData = () =>{
        this.props.onGetUser()
        this.props.onGetThreads()
        console.log('User ' + this.props.user[0].id)
        console.log('Thread ' + this.props.threads[0].id)
    
        }

    render(){
            
        return(
        <View style={styles.container}>
                <View style={styles.background}>
                <ImageBackground
                    style={styles.rect2}
                    source={require("../../assets/images/Gradient_AKqpKgP.png")}>
                
               <LogoHeader></LogoHeader>
                <View style={styles.box}>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('RegistrarPaciente')}} style={styles.inner}>
                        <Text style={styles.text2}>Inserir novo paciente</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.box}>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('ListarPaciente')}} style={styles.inner}>
                        <Text style={styles.text2}>Listar todos os pacientes</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.box}>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('ChatApp')}} style={styles.inner}>
                        <Text style={styles.text2}>Chat</Text>
                </TouchableOpacity>
                </View>
                    <View style={styles.box}>
                        <TouchableOpacity onPress={this.getData}
                        style={styles.inner}>
                            <Text style={styles.text2}>Sair</Text>
                        </TouchableOpacity>
                 </View>
                </ImageBackground>
            </View>
        </View>
        )
    }
    
}
const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    background: {
        flex: 1,
      },
      rect2:{
          flex: 1,  
          flexDirection: 'row',
          flexWrap: 'wrap'
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
      },
      text2: {
        color: "rgba(255,255,255,255)",
        fontSize: 16
      },
    box:{
        width: '50%',
        height: '25%',
        padding: 5,
    },
    inner:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderWidth: 3
    }
})

const mapStateToProps = ({ user, threads }) =>{
    return {
        email: user.email,
        name: user.name,
        user: user.user,
        threads: threads.threads

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logout()),
        onGetUser: () => dispatch(getUser()),
        onGetThreads: () => dispatch(getThreads())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)