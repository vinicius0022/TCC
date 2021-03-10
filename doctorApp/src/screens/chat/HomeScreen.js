import React, { Component } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { List, Divider } from 'react-native-paper';
import { connect } from 'react-redux'
import { getThreads } from '../../store/actions/Threads';
import Loading from '../../components/chat/Loading';
import Room from '../../components/chat/Room';

class HomeScreen extends Component {

  componentDidUpdate = prevProps => { 
    this.props.onGetThreads()
    if(prevProps.isLoading && !this.props.isLoading){   
        this.setState( {
            id: '',
            name: '',
            messages:[
                {
                    createdAt: null,
                    text: '',
                    user: {
                        id: '',
                        email: ''
                    }
                }
            ],
            latestMessage: {
              text: '',
              createdAt: null
            }
        })

    }
}

componentDidMount = () =>{
  this.props.onGetThreads()
}

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.threads}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <Divider />}
          renderItem={({ item }) => (
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Room', {threads: item})}>
            <List.Item
              title={item.name}
              description={item.latestMessage.text}
              titleNumberOfLines={1}
              style={styles.listTitle}
              descriptionStyle={styles.listDescription}
              descriptionNumberOfLines={1} />
          </TouchableOpacity>
         )}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
});

const mapStateToProps = ({ threads }) => {
  return {
    threads: threads.threads,
    isLoading: threads.isLoading
  }
}

const mapDispatchToProps = dispatch => {

  return {
    onGetThreads: () => dispatch(getThreads())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);