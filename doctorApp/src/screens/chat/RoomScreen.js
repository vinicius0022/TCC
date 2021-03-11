import React, { Component } from 'react';
import { GiftedChat, Bubble, Send, SystemMessage } from 'react-native-gifted-chat';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import { connect } from 'react-redux';
import {getMessages} from '../../store/actions/MessagesChat'
class RoomScreen extends Component {

  state = {
      id: this.props.id,
      createdAt: new Date().getTime(),
      text: '',
      user: {
        id: this.props.userId,
        email: this.props.email
      }
  }

 
  
  componentDidMount = () =>{
      this.props.onGetMessages(this.props.route.params.threads.id)
      
  }

 
  render(){
    function renderBubble(props) {
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
    
    function renderLoading(){
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size='large' color='#6646ee' />
        </View>
      );
    }
    
    function renderSend(props){
      return (
        <Send {...props}>
          <View style={styles.sendingContainer}>
            <IconButton icon='send-circle' size={32} color='rgb(15,121,134)' />
          </View>
        </Send>
      );
    }
    
    function scrollToBottomComponent(){
      return (
        <View style={styles.bottomComponentContainer}>
          <IconButton icon='chevron-double-down' size={36} color='#6646ee' />
        </View>
      );
    }
    
    function renderSystemMessage(props){
      console.log(props)
      return (
        <SystemMessage
          {...props}
          wrapperStyle={styles.systemMessageWrapper}
          textStyle={styles.systemMessageText}
        />
      );
    }
    const getMessages = ''
    function handleSend(){
      console.log(this.state) 
      return this.props.onSendMessage(this.state)
    }
    
    


    return (
    <GiftedChat
      messages={getMessages}
      onSend={handleSend}
      onInputTextChanged={text => this.setState({text})}
      user={{ id: this.props.userId }}
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

const mapStateToProps = ({ threads, messages, user }) => {
  return {
    id: threads.id,
    isLoading: threads.isLoading,
    messages: messages.messages,
    threads: threads.threads,
    userId: user.id,
    email: user.email


  }
}

const mapDispatchToProps = dispatch => {

  return{
    onGetMessages: thread => dispatch(getMessages(thread)),
    onSendMessage: messages => dispatch(creatingMessages(messages))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(RoomScreen)