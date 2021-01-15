import { SET_PATIENT, CREATING_PATIENT, PATIENT_CREATED } from '../actions/ActionTypes'

const initialState = {
    patient: [],
    isLoading: false,
}

const reducer = (state = initialState, action) => {

    switch(action.type){

        case SET_PATIENT:
        return{
           ...state,
           patient: action.payload         
         }

        case CREATING_PATIENT:

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


export default reducer