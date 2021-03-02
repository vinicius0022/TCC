import { SET_PATIENT, CREATING_PATIENT, PATIENT_CREATED } from '../actions/ActionTypes'

export const initialState = {
    patient:
        [{  
            id: Math.random(),
            cpf: '490023578',
            nome: 'Silas',
            sobrenome: 'teste',
            email: 'silas@teste.com',
            telefone: '1555181518',
        }],
    isLoading: false,
}

export const reducer = (state = initialState, action) => {

    switch(action.type){

        case SET_PATIENT:{
        return{
            ...state,
            patient: state.patient.concat({
            ...action.payload
           })   
         }
        }case CREATING_PATIENT:

        return{
           ...state,
            isLoading: true
        }

       case PATIENT_CREATED: 

       return{
        ...state,
        isLoading: false
       }

       default:

       return state
    }

}

