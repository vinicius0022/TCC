import React, { useState, useContext, useEffect, Component } from 'react';
import { GiftedChat, Bubble, Send, SystemMessage } from 'react-native-gifted-chat';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import { connect } from 'react-redux';

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

function renderSend(props) {
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
    messages: ['']
  }
  render(){
  return (
    <GiftedChat
      messages={this.props.threads}
      onSend={this.state.messages}
      user={{ id: 15 }}
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

const mapStateToProps = ({user}) =>{

  return{
    id: user.id
  }
}

export default connect(mapStateToProps)(RoomScreen)