import { THREAD_CREATED, GET_THREAD, SET_THREAD, CREATING_THREAD } from '../actions/ActionTypes'
import axios from 'axios'

const authBaseURL = 'https://identitytoolkit.googleapis.com/v1'
const API_KEY = 'AIzaSyDHIUKoCidl2nc156NJ688D5MZUIRj1j48'

export const createThread = thread => {

    return (dispatch, getState) => {

        dispatch(creatingThread())

        //requisição para inserir os dados no banco
        axios.post(`/threads.json`, {...thread})
            .catch(erro => {
                dispatch(setMessage({
                    title: 'Erro',
                    text: 'Não foi possivel criar uma sala'
                }))
            }).then(res => {
                if (res.data.name) {
                    axios.put(`/threads/${res.data.name}.json`, {
                        id: res.data.name,
                        name: thread.name,
                        latestMessage:{
                            text: `Você entrou na sala ${thread.name}.`,
                            createdAt: new Date().getTime()
                        }

                    }).catch(err => {
                        dispatch(setMessage({
                            title: 'Erro',
                            text: 'Não foi possivel criar a sala, tente novamente mais tarde!'
                        }))
                    }).then(() => {
                        dispatch(threadCreated())
                    })
            }})
    }
}

export const creatingThread = () => {

    return {
        type: CREATING_THREAD,
    }
}

export const threadCreated = () => {

    return {

        type: THREAD_CREATED
    }
}


export const setThread = () => {

    return {
        type: SET_THREAD
    }
}

export const getThread = () => {

    return {
        type: GET_THREAD
    }
}

