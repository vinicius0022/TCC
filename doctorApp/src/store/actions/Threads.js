import { THREAD_CREATED, GET_THREAD, SET_THREADS, CREATING_THREAD, SET_MESSAGES } from '../actions/ActionTypes'
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
                        messages:[
                            {
                                id: res.data.name,
                                createdAt: thread.latestMessage.createdAt,
                                text: `Você entrou na sala ${thread.name}.`,
                                user: {
                                   id: '',
                                   email: ''
                                }
                            }
                        ],
                        latestMessage:{
                            text: `Você entrou na sala ${thread.name}.`,
                            createdAt: thread.latestMessage.createdAt
                        }
                    }).catch(err => {
                        dispatch(setMessage({
                            title: 'Erro',
                            text: 'Não foi possivel criar a sala, tente novamente mais tarde!'
                        }))
                    }).then(() => {
                        dispatch(threadCreated())
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

export const threadCreated = () => {

    return {

        type: THREAD_CREATED
    }
}

export const setThread = threads => {

    return {
        type: SET_THREADS,
        payload: threads
    }
}

export const getThreads = () => {

    return dispatch => {
            
            // a baseURL padrão foi definada no index
           axios.get('/threads.json').catch(err => {
            dispatch(setMessage({
                title: 'Erro',
                text: 'Não foi possivel carregar as salas'
                }))
           }).then(res => {
            // a constante rawPosts recebe um objeto posts do Firabase com 3 atributos que identificam cada postagem
            const rawThreads = res.data
               const threads = []
               //cada atributo do objeto é adicionado no array posts
               for(let key in rawThreads){
                   threads.push({
                    //pega todos os atributos desse objeto
                    ...rawThreads[key],
                    id: key
                   })
               }
               //chama o dispatch chamando o setposts passando o array com as postagens
               //para ser renderizado no estado da aplicação
               dispatch(setThread(threads.reverse()))
               dispatch(Get())
           })
        }
}

export const Get = () =>{

    return{
        type: GET_THREAD
    }
}
