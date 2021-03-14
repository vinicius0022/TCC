import React, { Component } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { IconButton, Title } from 'react-native-paper';
import FormButton from '../../components/chat/FormButton'
import FormInput from '../../components/chat/FormInput'
import { connect } from 'react-redux'
import { addUserToRoom } from '../../store/actions/Threads'
class AddUserScreen extends Component {
    state = {
            name: '',
            email: ''
    }


    render() {
        return (
            <SafeAreaView style={styles.rootContainer}>
                <SafeAreaView style={styles.closeButtonContainer}>
                    <IconButton icon='close-circle' size={36} color='rgb(15, 121, 134)' onPress={() => this.props.navigation.goBack()} />
                </SafeAreaView>
                <SafeAreaView style={styles.innerContainer}>
                    <FormInput labelName='Nome do usuário' value={this.state.name} onChangeText={name => this.setState({ name })} clearButtonMode='while-editing' />
                    <FormInput labelName='E-mail do usuário' value={this.state.email} onChangeText={email => this.setState({ email })} clearButtonMode='while-editing' />
                    <FormButton style={styles.buttonLabel} mode='contained' title='Adicionar' onPress={() => this.props.addUserToRoom(this.props.route.params.thread.id, this.state)} disabled={this.state.email.length === 0} />
                </SafeAreaView>
            </SafeAreaView>
        );

    }
    componentDidUpdate = prevProps => {
        if (prevProps.isAdding && !this.props.isAdding) {
            this.setState({name: '', email: ''})
            this.props.navigation.navigate('Room', this.props.route.params.thread)
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

const mapStateToProps = ({ threads }) => {

    return {
        isAdding: threads.isAdding

    }
}

const mapDispatchToProps = dispatch => {

    return {
        addUserToRoom: (thread, user) => dispatch(addUserToRoom(thread, user))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddUserScreen);