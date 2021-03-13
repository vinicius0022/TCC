import React, { Component } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { IconButton, Title } from 'react-native-paper';
import FormButton from '../../components/chat/FormButton'
import FormInput from '../../components/chat/FormInput'
import { connect } from 'react-redux'
import { createThread } from '../../store/actions/Threads'
class AddRoomScreen extends Component {
    state = {
        id: '',
        name: '',
        users:[
            {
                name: this.props.name,
                email: this.props.email
            }
        ],
        messages: [
            {
                createdAt: new Date().getTime(),
                text: '',
                user: {
                    name: this.props.name,
                    email: this.props.email
                }
            }
        ],
        latestMessage: {
            text: '',
            createdAt: new Date().getTime(),
            system: true
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.rootContainer}>
                <SafeAreaView style={styles.closeButtonContainer}>
                    <IconButton icon='close-circle' size={36} color='rgb(15, 121, 134)' onPress={() => this.props.navigation.goBack()} />
                </SafeAreaView>
                <SafeAreaView style={styles.innerContainer}>
                    <Title styles={styles.title}>Criar uma nova sala de chat</Title>
                    <FormInput labelName='Nome da sala' value={this.state.name} onChangeText={name => this.setState({name})} clearButtonMode='while-editing' />
                    <FormButton style={styles.buttonLabel} mode='contained' title='Criar' onPress={() => this.props.onCreatethread(this.state)} disabled={this.state.name.length === 0} />
                </SafeAreaView>
            </SafeAreaView>
        );

    }
    componentDidUpdate = prevProps => {
        if (prevProps.isLoading && !this.props.isLoading) {
            this.setState({
                id: '',
                name: '',
                messages: [
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
                    createdAt: null,
                    system: true
                }
            })

            this.props.navigation.navigate('HomeScreen')
        }
    }
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    closeButtonContainer: {
        position: 'absolute',
        top: 30,
        right: 0,
        zIndex: 1,
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
    },
    buttonLabel: {
        fontSize: 22
    },
})

const mapStateToProps = ({ threads, user }) => {

    return {
        isCreating: threads.isCreating,
        isLoading: threads.isLoading,
        name: user.name,
        email: user.email,
        threads: threads.threads

    }
}

const mapDispatchToProps = dispatch => {

    return {

        onCreatethread: threads => dispatch(createThread(threads))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddRoomScreen);