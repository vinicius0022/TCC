import React, {Component} from 'react'
import {StyleSheet, View, TouchableOpacity } from 'react-native'
import {connect } from 'react-redux'
import { List, Divider } from 'react-native-paper';

class Room extends Component {

    render(){

        console.log(this.props.latestMessage)
        return(
            <View>
            <TouchableOpacity>
            <List.Item
              title={this.props.name}
              description={this.props.latestMessage}
              titleNumberOfLines={1}
              style={styles.listTitle}
              descriptionStyle={styles.listDescription}
              descriptionNumberOfLines={1} />
          </TouchableOpacity>
          </View>
        )
    }
}

const styles =  StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        flex: 1,
      },
      listTitle: {
        fontSize: 22
      },
      listDescription: {
        fontSize: 16
      }
})

const mapStateToProps = ({threads}) =>{

    return {
        threads: threads,
    }
}

export default connect(mapStateToProps)(Room)