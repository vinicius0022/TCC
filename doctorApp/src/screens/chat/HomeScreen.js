import React, { Component } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { List, Divider } from 'react-native-paper';
import { connect } from 'react-redux'
import {createThread} from '../../store/actions/Threads'

class HomeScreen extends Component {
  
  state = {
    threads:[{
      id: ''+Math.random(),
      name: 'Teste',
      latestMessage: {
        text: 'Teste',
        createdAt: new Date().getTime()
      }

    }],
  }

  render(){

    // const createthread = () => {
    //   return this.setState([{name:'teste', latestMessage:{text:'teste', createdAt: new Date().getTime()}}])
    // }
    console.log(this.state.threads)
    return (
      <View style={styles.container}>
      <FlatList
        data={this.state.threads}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Room', { thread: item })}>
            <List.Item
              title={item.name}
              description={item.latestMessage.text}
              titleNumberOfLines={1}
              style={styles.listTitle}
              descriptionStyle={styles.listDescription}
              descriptionNumberOfLines={1} />
          </TouchableOpacity>
        )} />
    </View>
  );
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

const mapStateToProps = ({ thread }) => {

  return {
    loading: thread.loading
  }
}

const mapDispatchToProps = dispatch => {

  return {

    onCreatethread: thread => dispatch(createThread(thread))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);