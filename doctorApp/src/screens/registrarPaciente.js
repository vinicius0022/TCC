import React, { useState } from 'react'
import { View, TextInput, Button, ScrollView, StyleSheet } from 'react-native'

const registrarPaciente = () => {

    const [state, setState] = useState({
        nome: '',
        sobrenome: '',
        cpf: '',
        telefone: '',
        email: '',
    });
    
    const mudancaTexto = (name, value) => {
        setState({ ...state, [name]: value })
    }

    const salvarNovoUsuario = async () => {
        if(state.nome === '') {
            alert('Por gentileza, informe o primeiro nome do paciente')
        } 
        else if(state.sobrenome === ''){
            alert('Por gentileza, informe o sobrenome do paciente')
        }
        else if(state.cpf === ''){
            alert('Por gentileza, informe o CPF do paciente')
        } 
        else if(state.telefone === ''){
            alert('Por gentileza, informe o telefone do paciente')
        } 
        else if(state.email === ''){
            alert('Por gentileza, informe o E-mail do paciente')
        } else {
            
            alert('Paciente cadastrado com sucesso')
        }
    }

    return(
        <ScrollView style={styles.container}>
            <View style={styles.input}>
                <TextInput placeholder="Primeiro Nome" onChangeText={(value) => mudancaTexto('nome', value)} />
            </View>

            <View style={styles.input}>
                <TextInput placeholder="Sobrenome" onChangeText={(value) => mudancaTexto('sobrenome', value)} />
            </View>

            <View style={styles.input}>
                <TextInput placeholder="CPF" onChangeText={(value) => mudancaTexto('cpf', value)} />
            </View>

            <View style={styles.input}>
                <TextInput placeholder="Telefone" onChangeText={(value) => mudancaTexto('telefone', value)} />
            </View>

            <View style={styles.input}>
                <TextInput placeholder="E-mail" onChangeText={(value) => mudancaTexto('email', value)} />
            </View>

            <View style={styles.input}>
                <Button title="Cadastrar Paciente" onPress={() => salvarNovoUsuario()} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25
    },
    input: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 2,
        borderBottomColor: '#cccc'
    }
})

export default registrarPaciente