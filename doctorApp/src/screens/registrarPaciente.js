import React, { useState, Component } from 'react'
import { View, TextInput, Button, Dimensions, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity, Text, ImageBackground} from 'react-native'
import { connect } from 'react-redux'
import {addPatient} from '../store/actions/Patient'

class RegistrarPaciente extends Component {


    //componente de ciclo de vida da aplicação
  //a aplicação foi atualizada
  componentDidUpdate = prevProps => {

    if (prevProps.isLoading && !this.props.isLoading) {
        this.setState({
            id:'',
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
        id: '',
        nome: '',
        sobrenome: '',
        cpf: '',
        telefone: '',
        email: '',
    }

    render(){

        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.background}>
                <ImageBackground
                    style={styles.rect2}
                    source={require("../../assets/images/Gradient_AKqpKgP.png")}>
                <ScrollView style={styles.scroll} >
                    
                    <View style={styles.textInput}>
                        <TextInput style={styles.input}
                                   placeholder="Primeiro Nome"
                                   placeholderTextColor="rgba(255,255,255,1)"
                                   value={this.state.nome}
                                   onChangeText={nome => this.setState({nome})} />
                    </View>

                    <View style={styles.textInput}>
                        <TextInput style={styles.input}
                                   placeholder="Sobrenome"
                                   placeholderTextColor="rgba(255,255,255,1)"
                                   value={this.state.sobrenome}
                                   onChangeText={sobrenome => this.setState({sobrenome})} />
                    </View>

                    <View style={styles.textInput}>
                        <TextInput style={styles.input}
                                   placeholder="CPF"
                                   placeholderTextColor="rgba(255,255,255,1)"
                                   value={this.state.cpf}
                                   onChangeText={cpf => this.setState({cpf})} />
                    </View>

                    <View style={styles.textInput}>
                        <TextInput style={styles.input}
                                   placeholder="Telefone"
                                   placeholderTextColor="rgba(255,255,255,1)"
                                   value={this.state.telefone}
                                   onChangeText={telefone => this.setState({telefone})} />
                    </View>

                    <View style={styles.textInput}>
                        <TextInput style={styles.input}
                                   placeholder="E-mail"
                                   placeholderTextColor="rgba(255,255,255,1)"
                                   value={this.state.email}
                                   onChangeText={email => this.setState({email})} />
                    </View>


                    <View style={styles.emailColumnFiller}></View>
                    <TouchableOpacity
                        onPress={() => { this.props.onCreatePatient(this.state) }}
                        style={styles.button}>
                    <Text style={styles.text2}>Registrar</Text>
                    </TouchableOpacity>
                </ScrollView>
                </ImageBackground>
                </View>
            </SafeAreaView>
            )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {

        flex: 1
      },
    scroll: {
        flex: 1,

        margin: 5,
        padding: 25,
    },
    input: {
        height: 50,
        color: "rgba(255,255,255,255)",
        flex: 1,
        marginRight: 17,
        marginLeft: 13,
      },
    textInput: {
        marginTop: 5,   
        marginBottom: 5,
        height: 59,
        backgroundColor: "rgba(255,255,255,0.25)",
        
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    
      },
    button: {
        width: 150,
        height: 59,
        backgroundColor: "rgba(31,178,204,1)",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: 'center',
        alignSelf: 'center',
        
      },
      buttonColumn:{
        width: Dimensions.get('window').width,
        height: 50,
        alignItems: "center",
        textAlign: "center",
        paddingVertical: 15,
      },
      text2: {
        color: "rgba(255,255,255,255)",
        fontSize: 18
      },
      rect2: {
        flex: 1
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