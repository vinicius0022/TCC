import { THREAD_CREATED, CREATING_THREAD, SET_THREADS } from '../actions/ActionTypes'
import axios from 'axios'
import { setMessage } from './Message'

const authBaseURL = 'https://identitytoolkit.googleapis.com/v1'
const API_KEY = 'AIzaSyDHIUKoCidl2nc156NJ688D5MZUIRj1j48'
export const createThread = thread => {

    return (dispatch, getState) => {

        dispatch(creatingThread())
        //requisição para inserir os dados no banco
        axios.post(`/threads.json`, { ...thread })
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
                        users:[
                            {
                                name: getState().user.name,
                                email: getState().user.email
                            }
                        ],
                        messages: [
                            {
                                id: '',
                                idThread: '',
                                createdAt: '',
                                text: `Você entrou na sala ${thread.name}`,
                                user: {
                                    _id: getState().user.id,
                                    email: getState().user.email
                                },
                                system: true
                            }
                        ],
                        latestMessage: {
                            text: `Você entrou na sala ${thread.name}.`,
                            createdAt: thread.latestMessage.createdAt,
                            system: true
                        }

                    }).catch(err => {
                        dispatch(setMessage({
                            title: 'Erro',
                            text: 'Não foi possivel criar a sala, tente novamente mais tarde!'
                        }))
                    })

                    axios.get(`/threads/${res.data.name}.json`).catch(err => {
                        dispatch(setMessage({
                            title: 'Erro',
                            text: 'Não foi possivel carregar as salas'
                        }))
                    }).then(res => {
                        if (res.data) {
                            dispatch(threadCreated(res.data))
                        }
                    })
                }
            })
    }
}

export const creatingThread = () => {

    return {
        type: CREATING_THREAD,
    }
}

export const threadCreated = thread => {

    return {

        type: THREAD_CREATED,
        payload: thread
    }
}

export const setThreads = threads => {

    return {

        type: SET_THREADS,
        payload: threads
    }
}

export const getThreads = () =>{
    
    return (dispatch, getState) =>{
        axios.get(`/threads.json`).catch(err => {
            dispatch(setMessage({
                title: 'Erro',
                text: 'Não foi possivel carregar as salas'
            }))
        }).then(res => {
                const rawThreads = res.data;
                const threads = [];
                for(let item in rawThreads){
                    for(let user in rawThreads[item].users){
                        if(rawThreads[item].users[user].email == getState().user.email)
                        threads.push({
                            ...rawThreads[item]
                        })
                    }
                }

                
                dispatch(setThreads(threads.reverse()))
        })
    }
}
