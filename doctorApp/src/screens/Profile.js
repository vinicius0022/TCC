import React, { Component } from 'react'
import {connect} from 'react-redux'
import { logout } from '../store/actions/User'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'


class Profile extends Component {
    
    logout = () =>{
        this.props.onLogout()
        this.props.navigation.navigate('Login')
    }

    render(){

        const options = { email: this.props.email, secure: true }
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text>Header</Text>
                </View>
                <View style={styles.box}>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('RegistrarPaciente')}} style={styles.inner}>
                        <Text>Inserir novo paciente</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Text>Listar todos os pacientes</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Text>Meu perfil</Text>
                    </View>
                </View>
                    <View style={styles.box}>
                        <TouchableOpacity onPress={this.logout}
                        style={styles.inner}>
                            <Text>Sair</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '75%',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    header:{
        width: '100%',
        height:'25%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
        borderRadius: 20,
        borderWidth: 3,
        marginTop: 10,
        marginBottom: 25
    },
    box:{
        width: '50%',
        height: '50%',
        padding: 5,
    },
    inner:{
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderWidth: 3
    }
})

const mapStateToProps = ({ user }) =>{
    return {
        email: user.email,
        name: user.name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)