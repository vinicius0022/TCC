import React, { useState, Component } from 'react'
import { View, TextInput, Button, Dimensions, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity, Text} from 'react-native'
import { connect } from 'react-redux'
import {addPatient} from '../store/actions/Patient'

class RegistrarPaciente extends Component {


    //componente de ciclo de vida da aplicação
  //a aplicação foi atualizada
  componentDidUpdate = prevProps => {

    if (prevProps.isLoading && !this.props.isLoading) {
        this.setState({
            nome: '',
            sobrenome: '',
            cpf: '',
            telefone: '',
            email: '',
        })
        this.props.navigation.navigate('Profile')
    }
  }

    state = {
        nome: '',
        sobrenome: '',
        cpf: '',
        telefone: '',
        email: '',
    }

    render(){

        return(
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scroll} >
                    <View style={styles.input}>
                        <TextInput placeholder="Primeiro Nome" value={this.state.nome} onChangeText={nome => this.setState({nome})} />
                    </View>

                    <View style={styles.input}>
                        <TextInput placeholder="Sobrenome" value={this.state.sobrenome} onChangeText={sobrenome => this.setState({sobrenome})} />
                    </View>

                    <View style={styles.input}>
                        <TextInput placeholder="CPF" value={this.state.cpf} onChangeText={cpf => this.setState({cpf})} />
                    </View>

                    <View style={styles.input}>
                        <TextInput placeholder="Telefone" value={this.state.telefone} onChangeText={telefone => this.setState({telefone})} />
                    </View>

                    <View style={styles.input}>
                        <TextInput placeholder="E-mail" value={this.state.email} onChangeText={email => this.setState({email})} />
                    </View>

                    <View style={styles.buttonColumn}>
                    <TouchableOpacity
                        onPress={() => { this.props.onCreatePatient(this.state) }}
                        style={styles.button}>
                    <Text style={styles.text2}>Cadastrar</Text>
                    </TouchableOpacity>
                    </View>

                </ScrollView>
            </SafeAreaView>
            )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scroll: {
        flex: 1,
        padding: 25
    },
    input: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 2,
        borderBottomColor: '#cccc'
    },
    button: {
        flex: 1,
      },
      buttonColumn:{
        width: Dimensions.get('window').width,
        height: 50,
        alignItems: "center",
        textAlign: "center",
        paddingVertical: 15,
        backgroundColor: '#cccc'
      },
      text2: {
        fontWeight: "bold",
        fontSize: 18,
      },
})

const mapStateToProps = ({ patient }) => {

    return {
      isLoading: patient.isLoading
    }
  }
  
  
  const mapDispatchToProps = dispatch => {
  
    return {
  
      onCreatePatient: patient => dispatch(addPatient(patient))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(RegistrarPaciente)