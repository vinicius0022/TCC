import { SET_MESSAGES } from '../actions/ActionTypes'
import axios from 'axios'
import { cos } from 'react-native-reanimated'

export const getMessages = () =>{
    return dispatch => {
        const allMessage = []
        axios.get('/threads.json').catch(err => {
            dispatch(setMessage({
                title: 'Erro',
                text: 'Não foi possivel carregar as salas'
                })) 
           }).then(res => {
            const rawThreads = res.data
        const threads = []

               for(let keyThread in rawThreads){
                   threads.push({
                    ...rawThreads[keyThread],
                    id: keyThread
                   })
                   
                   axios.get(`threads/${keyThread}/messages.json`).catch(err => {
                    dispatch(setMessage({
                        title: 'Erro',
                        text: 'Não foi possivel carregar as salas'
                    }))
           }).then(res => {
            const rawMessages = res.data
            const messages = [];
               for(let key in rawMessages){
                   if(keyThread == rawMessages[key].id){
                   messages.push({
                    ...rawMessages[key],
                    id: key
                   })
                }
                console.log("teste1"+rawMessages[key].id+ " - " + keyThread)
                dispatch(setMessages(messages.reverse()))
            }
            })
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