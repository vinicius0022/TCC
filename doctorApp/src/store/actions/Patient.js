import { CREATING_PATIENT, SET_PATIENT, PATIENT_CREATED } from './ActionTypes'
import axios from 'axios'
import { setMessage } from './Message'

const authBaseURL = 'https://identitytoolkit.googleapis.com/v1'
const API_KEY = 'AIzaSyDHIUKoCidl2nc156NJ688D5MZUIRj1j48'

export const addPatient = patient => {

    return (dispatch, getState) => {

        dispatch(creatingPatient())

        //requisição para inserir os dados no banco
        axios.post(`/patient.json`, {...patient})
            .catch(erro => {
                dispatch(setMessage({
                    title: 'Erro',
                    text: 'Não foi possivel de cadastrar um paciente'
                }))
            }).then(res => {
                if (res.data.name) {
                    axios.put(`/patient/${res.data.name}.json`, {

                        id: res.data.name,
                        email: res.data.email,
                        nome: patient.nome,
                        sobrenome: patient.sobrenome,
                        cpf: patient.cpf,
                        telefone: patient.telefone

                    }).catch(err => {
                        dispatch(setMessage({
                            title: 'Erro',
                            text: 'Não foi possivel fazer o cadastro, tente novamente mais tarde!'
                        }))
                    }).then(() => {
                            dispatch(patientCreated())
                        })
                    }
                    else{
                        dispatch(setMessage({
                            title: 'Erro',
                            text: 'Não foi possivel atualizar os dados'
                        }))
                    }
            })
    }
}

//recebe um array de posts e retorna uma action
export const setPatient = patient => {

            return {

                type: SET_PATIENT,
                payload: patient
            }
        }

       /*  //obtem os dados de forma assincrona atraves de uma requisição ajax utilizando o axios e redux thunk, acessando o firebase
        export const getPatient = () => {


            return dispatch => {

                // a baseURL padrão foi definada no index
                axios.get('/patient.json').catch(err => {
                    dispatch(setMessage({
                        title: 'Erro',
                        text: 'Não foi possivel carregar o Feed'
                    }))
                }).then(res => {
                    // a constante patient recebe um objeto com todos os pacientes cadastrados
                    const patient = res.data
                    
                    //chama o dispatch chamando o setpatient passando o objeto com os pacientes
                    //para ser renderizado no estado da aplicação
                    dispatch(setPatient(patient.reverse()))

                })


            }
        } */

        export const creatingPatient = () => {

            return {
                type: CREATING_PATIENT,
            }
        }

        export const patientCreated = () => {

            return {

                type: PATIENT_CREATED
            }
        }