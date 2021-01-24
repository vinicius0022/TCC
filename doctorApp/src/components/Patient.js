import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { connect } from 'react-redux'

class Patient extends Component {


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.patientContainer}>
                    <Text style={styles.nome}>ID: {this.props.nome}</Text>
                    <Text style={styles.email}>Nome: {this.props.email}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    patientContainer: {
        flexDirection: 'row',
        marginTop: 5
    },
    nome: {
        marginLeft: 5,
        fontWeight: 'bold',
        color: '#444'
    },
    email: {
        color: '#555'
    }
})


const mapStateToProps = ({ patient }) => {

    return {
        nome: patient.nome,
        email: patient.email

    }
}

export default connect(mapStateToProps)(Patient)