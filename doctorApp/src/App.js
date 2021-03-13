import React, {Component} from 'react'
import {Alert, View } from 'react-native'
import {connect } from 'react-redux'
import Routes from './navigation/Routes'
import {setMessage} from './store/actions/Message'


class App extends Component{

    componentDidUpdate = () =>{

        if(this.props.text && this.props.text.toString().trim()){

            Alert.alert(this.props.title || 'Mensagem', this.props.text.toString())
            
            this.props.clearMessage()
        }
    }
    render(){
        return(

            <Routes/>
        )
    }
}


const mapStateToProps = ({message}) =>{

    return{

        title: message.title,
        text: message.text
    }
}

const mapDispatchToProps = dispatch =>{

    return{
        clearMessage: () => dispatch(setMessage({title: '', text: ''}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)