import React, { Component } from 'react';
import { GiftedChat, Bubble, Send, SystemMessage } from 'react-native-gifted-chat';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import { connect } from 'react-redux';
import {getMessages} from '../../store/actions/MessagesChat'

const renderBubble = props => {
  return (
    <Bubble {...props} wrapperStyle={{
        right: {
          backgroundColor: '#6646ee'
        }
      }}
      textStyle={{
        right: {
          color: '#fff'
        }
      }}
    />
  );
}

const renderLoading = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size='large' color='#6646ee' />
    </View>
  );
}

const renderSend = props =>{
  return (
    <Send {...props}>
      <View style={styles.sendingContainer}>
        <IconButton icon='send-circle' size={32} color='rgb(15,121,134)' />
      </View>
    </Send>
  );
}

const scrollToBottomComponent = () => {
  return (
    <View style={styles.bottomComponentContainer}>
      <IconButton icon='chevron-double-down' size={36} color='#6646ee' />
    </View>
  );
}

const renderSystemMessage = props => {
  return (
    <SystemMessage
      {...props}
      wrapperStyle={styles.systemMessageWrapper}
      textStyle={styles.systemMessageText}
    />
  );
}

class RoomScreen extends Component {

  state = {
      id: '',
      createdAt: '',
      text: '',
      user: {
        id: '',
        email: ''
      }
  }

 
  
  componentDidMount = () =>{
    this.props.onGetMessages()
  }

 
  render(){
    return (
    <GiftedChat
      messages={this.props.messages}
      onSend={this.state}
      user={{ _id: 15 }}
      placeholder='Digite a sua mensagem aqui...'
      alwaysShowSend
      showUserAvatar
      scrollToBottom
      renderBubble={renderBubble}
      renderLoading={renderLoading}
      renderSend={renderSend}
      scrollToBottomComponent={scrollToBottomComponent}
      renderSystemMessage={renderSystemMessage}
    />
  );
  }

  componentDidUpdate = prevProps => { 
}

}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sendingContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomComponentContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  systemMessageWrapper: {
    backgroundColor: '#6646ee',
    borderRadius: 4,
    padding: 5
  },
  systemMessageText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold'
  }
});

const mapStateToProps = ({ threads, messages }) => {
  return {
    threads: threads.threads,
    isLoading: threads.isLoading,
    messages: messages.messages


  }
}

const mapDispatchToProps = dispatch => {

  return{
    onGetMessages: thread => dispatch(getMessages(thread))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(RoomScreen)