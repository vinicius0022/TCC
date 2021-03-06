import { THREAD_CREATED, GET_THREAD, CREATING_THREAD, SET_THREADS } from '../actions/ActionTypes'

export const initialState = {
        threads:[],
        isCreating: false,
        isLoading: false
}


export const reducer = (state = initialState, action) => {

    switch(action.type){

        case SET_THREADS:
            return{
                ...state,
                threads: action.payload,
                isCreating: false,
                isLoading: false
            }
        case CREATING_THREAD:
            return{
            ...state,
            isCreating: true,
            isLoading: true
            }
        case GET_THREAD:
            return{
               ...state,
               isCreating: false,
               isLoading: false
            }
        case THREAD_CREATED: 
            return{
            ...state,
            isCreating: false,
            isLoading: true
            }
         
       default:
       return state
    }

}

