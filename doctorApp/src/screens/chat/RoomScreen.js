import React, { Component } from 'react';
import { GiftedChat, Bubble, Send, SystemMessage } from 'react-native-gifted-chat';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import { connect } from 'react-redux';
import { getMessages, creatingMessages } from '../../store/actions/MessagesChat'


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

function renderLoading() {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size='large' color='#6646ee' />
    </View>
  );
}

function renderSendMessage(props) {
  return (
    <Send {...props}>
      <View style={styles.sendingContainer}>
        <IconButton icon='send-circle' size={32} color='rgb(15,121,134)' />
      </View>
    </Send>
  );
}

function scrollToBottomComponent() {
  return (
    <View style={styles.bottomComponentContainer}>
      <IconButton icon='chevron-double-down' size={36} color='#6646ee' />
    </View>
  );
}

function renderSystemMessage(props) {
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
    messages:[{
      id: '',
      createdAt: '',
      text: '',
      user: {
          id: this.props.userId,
          email: this.props.email,
          idThread: this.props.route.params.threads.id
      }
    }]
  }

 

  render() {

    const handleSend = async (messages) => {
      await this.props.onSendMessage(messages);
    }
    return (
      <GiftedChat
        messages={this.props.messages}
        onSend={handleSend}
        user={{
          _id: this.props.userId,
          idThread: this.props.route.params.threads.id
        }}
        placeholder='Digite a sua mensagem aqui...'
        alwaysShowSend
        showUserAvatar={true}
        scrollToBottom
        renderBubble={renderBubble}
        renderLoading={renderLoading}
        renderSend={renderSendMessage}
        scrollToBottomComponent={scrollToBottomComponent}
        renderSystemMessage={renderSystemMessage}
      />
    );
  }

  componentDidMount = () => {

    this.props.onGetMessages(this.state.messages)
  }

  componentDidUpdate = prevProps =>{
    if(prevProps.newMessages && this.props.newMessages){
      this.props.onGetMessages(this.state.messages)
    }
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

const mapStateToProps = ({ messages, user }) => {
  return {
    newMessages: messages.newMessages,
    messages: messages.messages,
    userId: user.id,
    email: user.email
  }
}

const mapDispatchToProps = dispatch => {

  return {
    onGetMessages: message => dispatch(getMessages(message)),
    onSendMessage: id => dispatch(creatingMessages(id))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(RoomScreen)