import { THREAD_CREATED, GET_THREAD, CREATING_THREAD, SET_THREADS, SET_MESSAGE } from '../actions/ActionTypes'

export const initialState = {
        threads:[],
        isLoading: false
}


export const reducer = (state = initialState, action) => {

    switch(action.type){

        case SET_THREADS:
            return{
                ...state,
                threads: action.payload,
                isLoading: false
            }
            case SET_MESSAGE:
            return{
                ...state,
                message: action.payload,
                isLoading: false
            }
        case CREATING_THREAD:
            return{
            ...state,
            isLoading: true
            }
        case GET_THREAD:
            return{
               ...state,
               isLoading: false
            }
        case THREAD_CREATED: 
            return{
            ...state,
            isLoading: false
            }
         
       default:
       return state
    }

}

