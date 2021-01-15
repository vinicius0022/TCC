import { CREATING_PATIENT, SET_PATIENT, PATIENT_CREATED } from './ActionTypes'
import axios from 'axios'
import { setMessage } from './Message'



export const addPatient = patient => {

    return (dispatch, getState) => {

        dispatch(creatingPatient())

        //requisição para inserir os dados no banco
        axios.post(`/patient.json?auth=${getState().user.token}`, { ...patient })
            .catch(erro => {
                dispatch(setMessage({
                    title: 'Erro',
                    text: 'Não foi possivel de cadastrar um paciente'
                }))
            }).then(() => {
                dispatch(patientCreated())
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

//obtem os dados de forma assincrona atraves de uma requisição ajax utilizando o axios e redux thunk, acessando o firebase
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
}

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