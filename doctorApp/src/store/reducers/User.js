import { USER_LOGGED_IN, USER_LOGGED_OUT, LOADING_USER, USER_LOADED, SET_USERS } from '../actions/ActionTypes'

export const initialState = {
    id: null,
    name: null,
    email: null,
    isAuthentic: false,
    token: false
}


export const reducer = (state = initialState, action) => {

    switch (action.type) {

        case USER_LOGGED_IN:
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email,
                token: action.payload.token
            }
        case USER_LOGGED_OUT:
            return {
                ...initialState
            }
        case LOADING_USER:
            return {
                ...state,
                isAuthentic: false
            }
        case USER_LOADED:
            return {
                ...state,
                isAuthentic: true
            }

        case SET_USERS:
            return {
                ...state,
                user: action.payload,
                isAuthentic: true
            }

        default:
            return state
    }
}