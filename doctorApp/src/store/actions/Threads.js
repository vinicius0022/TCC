import { THREADS_CREATED, GET_THREADS, SET_THREADS } from './ActionTypes'
import axios from 'axios'
import setMessage from 'Message'

const authBaseURL = 'https://identitytoolkit.googleapis.com/v1'
const API_KEY = 'AIzaSyDHIUKoCidl2nc156NJ688D5MZUIRj1j48'

export const createThread = thread => {

    return (dispatch, getState) => {

        dispatch(creatingPatient())

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
                        latestMessage:{
                            text: res.data.latestMessage.text,
                            createdAt: new Date().getTime()
                        }

                    }).catch(err => {
                        dispatch(setMessage({
                            title: 'Erro',
                            text: 'Não foi possivel criar a sala, tente novamente mais tarde!'
                        }))
                    })
            }})
    }
}
