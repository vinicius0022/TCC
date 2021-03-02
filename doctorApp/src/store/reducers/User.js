import {USER_LOGGED_IN, USER_LOGGED_OUT, LOADING_USER, USER_LOADED} from '../actions/ActionTypes'

export const initialState = {
    
    nome: null,
    email: null,
    isLoading: false,
    token: false
}


export const reducer = (state = initialState, action) => {

    switch (action.type){

        case USER_LOGGED_IN:
            return {
                ...state,
                nome: action.payload.name,
                email: action.payload.email,
                token: action.payload.token
            }
            break;
        case USER_LOGGED_OUT:
            return {
                ...initialState
            }
            break;

        case LOADING_USER:
            return{
                ...state,
                isLoading: true
            }
        case  USER_LOADED:
            return{
                ...state,
                isLoading: false
            }
        default: 
            return state
    }   
}