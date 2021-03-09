import { SET_MESSAGES, CREATING_MESSAGES, CREATED_MESSAGES } from '../actions/ActionTypes'
import axios from 'axios'
import { cos } from 'react-native-reanimated'

export const getMessages = thread => {
    return dispatch => {
        dispatch(creatingMessages())
        console.log('-'+thread)
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
                        id: key
                    })
                dispatch(setMessages(messages))
                dispatch(createdMessages())
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

export const creatingMessages = () => {

    return {
        type: CREATING_MESSAGES
    }
}
export const createdMessages = () => {

    return {
        type: CREATED_MESSAGES
    }
}