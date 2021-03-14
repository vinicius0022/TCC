
import { USER_LOGGED_IN, USER_LOGGED_OUT, LOADING_USER, USER_LOADED, SET_USERS, USER_ADDED_TO_ROOM, IS_ADDING_USER_TO_ROOM} from './ActionTypes'
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
                text: `Não foi possivel fazer o cadastro ${err}`
            }))
        })
            .then(res => {

                if (res.data.localId) {
                    axios.put(`/users/${res.data.localId}.json`, {

                        id: res.data.localId,
                        email: res.data.email,
                        name: user.name,
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
                            text: 'Não foi possivel fazer o cadastro, tente novamente mais tarde!'
                        }))
                    })
                        .then(() => {
                            dispatch(login(user))

                        })
                } else{
                    dispatch(setMessage({
                        title: 'Erro',
                        text: 'Não foi possivel fazer o login, tente novamente mais tarde!'
                    }))
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
        axios.post(`${authBaseURL}/accounts:signInWithPassword?key=${API_KEY}`, dados, config)
        .catch(err => {
            dispatch(setMessage({
                title: 'Erro',
                text: `Não foi possivel fazer o login, e-mail e senha inválidos!`   
            }))
        }).then(res => {

                if (res.data.localId) {
                    user.token = res.data.idToken
                    axios.get(`/users/${res.data.localId}.json`)
                        .catch(err => {
                            
                            dispatch(setMessage({
                                title: 'Erro',
                                text: 'Não foi possivel fazer o login, tente novamente mais tarde!'
                            }))
                        })
                        .then(res => {
                            delete user.senha
                            user.name = res.data.name
                            user.id = res.data.id
                            console.log(user)
                            dispatch(userLogged(user))
                            dispatch(userLoaded())
                        })
                }else{
                    dispatch(setMessage({
                        title: 'Erro',
                        text: 'Não foi possivel fazer o login, tente novamente mais tarde!'
                    }))
                }
            })
    }
}

//redefinição de senha
export const forgot = user => {

   
    const dados = {
        email: user.email,
        requestType : "PASSWORD_RESET"
    }

    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    return dispatch => {


        axios.post(`${authBaseURL}/accounts:sendOobCode?key=${API_KEY}`, dados, config).catch(err => {
            dispatch(setMessage({
                title: 'Erro',
                text: `Não foi possivel redefinir a senha, tente novamente mais tarde! ${err}`
            }))
        }).then(res => {

            dispatch(setMessage({
                title: 'Redefinição de senha',
                text: `Verifique a caixa de entrada do email ${user.email} para realizar a redefinição da senha.`
            }))
            })
    }
}


export const getUser = () =>{

    return dispatch => {
        
        axios.get('/users.json').catch(err =>{
            dispatch(setMessage({
                title: 'Erro',
                text: 'Não foi possivel buscar os usuários'
            }))
        }).then(res =>{
            const rawUsers = res.data
            const users = []
            for(let item in rawUsers){
                users.push({
                    ...rawUsers[item],
                })
            }            
            dispatch(setUsers(users))
        })
    }
}

export const setUsers = users =>{

    return{
        type: SET_USERS,
        payload: users
    }
}


