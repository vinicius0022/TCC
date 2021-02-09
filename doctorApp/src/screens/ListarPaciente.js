import React, { Component } from 'react'
import { View, FlatList, TextInput, Dimensions, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity, Text, ImageBackground} from 'react-native'
import { connect } from 'react-redux'
import Patient from '../components/Patient'
import {addPatient} from '../store/actions/Patient'

class ListarPaciente extends Component {

    render(){

        return(
            <View style={styles.container}>
            <Patient patients={this.props.patient}/>
            </View>
            )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#F5FCFF'
    }
})


const mapStateToProps = ({ patient }) => {

    return {
      patient: patient.patient,
      isLoading: patient.isLoading
    }
  }
  
  export default connect(mapStateToProps)(ListarPaciente)