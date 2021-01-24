import React, { Component } from 'react'
import { View, FlatList, TextInput, Dimensions, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity, Text, ImageBackground} from 'react-native'
import { connect } from 'react-redux'
import Patient from '../components/Patient'
import {addPatient} from '../store/actions/Patient'

class ListarPaciente extends Component {

    render(){

        return(
            <View style={styles.container}>
              <FlatList 
                    data={this.props.patient}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({item}) => 
                    <Patient key={item.id} {...item}/>}
                />
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