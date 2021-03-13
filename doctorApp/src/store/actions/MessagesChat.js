import { SET_MESSAGES, CREATING_MESSAGES, CREATED_MESSAGES } from '../actions/ActionTypes'
import axios from 'axios'
import { setMessage } from './Message'

export const getMessages = messages => {
    return (dispatch, getState) => {
        axios.get(`threads/${messages[0].user.idThread}/messages.json`).catch(err => {
            dispatch(setMessage({
                title: 'Erro',
                text: 'Não foi possivel enviar a menssagem'
            }))
        }).then(res => {
            const rawMessages = res.data
            const messages = [];
            for (let key in rawMessages) {
                    messages.push({
                        ...rawMessages[key],
                        
                    })
                    
                }
                dispatch(setMessages(messages.reverse()))
        })

    }
}

export const setMessages = messages => {

    return {
        type: SET_MESSAGES,
        payload: messages
    }
}

export const creatingMessages = messages => {
    
    return (dispatch, getState) => {
        axios.post(`/threads/${messages[0].user.idThread}/messages.json`, {...messages}).catch(err =>{
            dispatch(setMessages({
                title: 'Erro',
                text: 'Não foi possivel enviar menssagem'
            }))
        }).then(res =>{
            if(res.data.name){
                axios.put(`/threads/${messages[0].user.idThread}/messages/${res.data.name}.json`,{
                    id: res.data.name,
                    createdAt: messages[0].createdAt,
                    text: messages[0].text,
                    user: {
                        id: messages[0].user._id,
                        email: getState().user.email,
                        idThread: messages[0].user.idThread
                    }
                }).catch(err =>{
                    dispatch(setMessages({
                        title: 'Erro',
                        text: 'Não foi possivel enviar menssagem'
                    }))
                })
            }

            dispatch(getMessages(messages))
            console.log("Mensagem criada")
            dispatch(createdMessages())
        })
    }
}
export const createdMessages = () => {

    return {
        type: CREATED_MESSAGES
    }
}