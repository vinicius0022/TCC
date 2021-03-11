import { SET_MESSAGES, CREATING_MESSAGES, CREATED_MESSAGES } from '../actions/ActionTypes'
import axios from 'axios'
import { set } from 'react-native-reanimated'

export const getMessages = thread => {
    return dispatch => {
        axios.get(`threads/${thread}/messages.json`).catch(err => {
            dispatch(setMessage({
                title: 'Erro',
                text: 'Não foi possivel carregar as salas'
            }))
        }).then(res => {
            const rawMessages = res.data
            const messages = [];
            for (let key in rawMessages) {
                    messages.push({
                        ...rawMessages[key],
                    })
                dispatch(setMessages(messages))
            }
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

    return dispatch => {
        dispatch(creatingMessages())
        axios.post(`/threads/${id}/messages.json`, {...messages}).catch(err =>{
            dispatch(setMessages({
                title: 'Erro',
                text: 'Não foi possivel enviar menssagem'
            }))
        }).then(res =>{
            if(res.data.name){
                axios.put(`/threads/${id}/messages/${res.data.name}.json`,{
                    id: res.data.name,
                    createdAt: messages.createdAt,
                    text: messages.text,
                    user: {
                        id: messages.user.id,
                        email: messages.user.email
                    }
                });
            }
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