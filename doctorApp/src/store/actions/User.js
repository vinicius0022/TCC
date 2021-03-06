
import { USER_LOGGED_IN, USER_LOGGED_OUT, LOADING_USER, USER_LOADED } from './ActionTypes'
import axios from 'axios'
import { setMessage } from './Message'

const authBaseURL = 'https://identitytoolkit.googleapis.com/v1'
const API_KEY = 'AIzaSyDHIUKoCidl2nc156NJ688D5MZUIRj1j48'

export const userLogged = user => {

    return {
        type: USER_LOGGED_IN,
        payload: user
    }
}

export const logout = () => {

    return {
        type: USER_LOGGED_OUT
    }
}

export const createUser = user => {
  
    const dados = {
        email: user.email,
        password: user.senha,
        returnSecureToken: true
    }
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    return dispatch => {
        dispatch(loadingUser())
        axios.post(`${authBaseURL}/accounts:signUp?key=${API_KEY}`, dados, config).catch(err => {
            dispatch(setMessage({
                title: 'Erro',
                text: `Não foi possivel fazer o cadastro erro ${err} ${user.email}`
            }))
        })
            .then(res => {

                if (res.data.localId) {
                    axios.put(`/users/${res.data.localId}.json`, {

                        id: res.data.localId,
                        nome: user.nome,
                        sobrenome: user.sobrenome,
                        cpf: user.cpf,
                        rg: user.rg,
                        tel: user.tel,
                        crm: user.crm,
                        idade: user.idade,
                        endereco: user.endereco,

                    }).catch(err => {
                        dispatch(setMessage({
                            title: 'Erro',
                            text: 'Não foi possivel fazer o cadastro erro 2'
                        }))
                    })
                        .then(() => {
                            dispatch(login(user))

                        })
                }
            })
    }
}

export const loadingUser = () => {

    return {

        type: LOADING_USER

    }
}

export const userLoaded = () => {

    return {

        type: USER_LOADED
    }
}

export const login = user => {

   
    const dados = {
        email: user.email,
        password: user.senha,
        returnSecureToken: true
    }
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    return dispatch => {

        dispatch(loadingUser())
        axios.post(`${authBaseURL}/accounts:signInWithPassword?key=${API_KEY}`, dados, config).catch(err => {
            dispatch(setMessage({
                title: 'Erro',
                text: `Não foi possivel fazer o login, tente novamente mais tarde! ${user.senha}`
            }))
        }).then(res => {

                if (res.data.localId) {
                    user.token = res.data.idToken
                    axios.get(`/users/${res.data.localId}.json`)
                        .catch(err => {
                            dispatch(setMessage({
                                title: 'Erro',
                                text: 'Não foi possivel fazer o login, tente novamente mais tarde erro 2'
                            }))
                        })
                        .then(res => {
                            delete user.senha
                            user.nome = res.data.nome
                            dispatch(userLogged(user))
                            dispatch(userLoaded())
                        })
                }
            })
    }
}