import { THREAD_CREATED, GET_THREAD, CREATING_THREAD, SET_THREADS, IS_ADDING_USER_TO_ROOM, USER_ADDED_TO_ROOM } from '../actions/ActionTypes'

export const initialState = {
    threads: [],
    idThread: null,
    name: null,
    users: [],
    messages: [],
    latestMessage: {
        text: null,
        createdAt: null
    },
    isLoading: false,
    isAdding: false

}


export const reducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_THREADS:
            return {
                ...state,
                threads: action.payload,
                isLoading: false
            }
        case CREATING_THREAD:
            return {
                ...state,
                isLoading: true
            }
        case GET_THREAD:
            return {
                ...state,
                isLoading: false
            }
        case THREAD_CREATED:
            return {
                idThread: action.payload.id,
                name: action.payload.name,
                users: action.payload.users,
                messages: action.payload.messages,
                latestMessage: {
                    text: action.payload.latestMessage.text,
                    createdAt: action.payload.latestMessage.createdAt
                },
                isLoading: false
            }

        case IS_ADDING_USER_TO_ROOM:
            return {
                ...state,
                isAdding: true
            }

        case USER_ADDED_TO_ROOM:
            return {
                ...state,
                users: action.payload.users,
                isAdding: false
            }


        default:
            return state
    }

}

