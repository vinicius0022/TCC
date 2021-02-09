import React, { Component } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'


class Patient extends Component {


    render (){

        let view = null
        if(this.props.patients){
            view = this.props.patients.map((item, index) => {
                return (
                    <View  style={styles.row} key={index}>
                        <Text style={styles.item}>{item.id}</Text>
                        <Text style={styles.item}>{item.nome}</Text>
                        <Text style={styles.item}>{item.email}</Text>
                        </View>
                )
            })
        }
        return(
            <View style={styles.container}>
                {view}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row:{
        flex: 10,
        flexDirection:'row',
        justifyContent:'space-around',
        width: Dimensions.get('window').width,
    },
    item: {
        flex: 5,
     

    }
})



export default (Patient)