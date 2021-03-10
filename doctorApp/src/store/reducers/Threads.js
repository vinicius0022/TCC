import { THREAD_CREATED, GET_THREAD, CREATING_THREAD, SET_THREADS } from '../actions/ActionTypes'

export const initialState = {
    threads:[],
    id: null,                        
    name: null,
    userId: null,
    messages:[],
    latestMessage:{
        text: null,
        createdAt: null
    },
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
                id: action.payload.id,                        
                name: action.payload.name,
                userId: action.payload.userId,
                messages: action.payload.messages,
                latestMessage:{
                    text: action.payload.latestMessage.text,
                    createdAt: action.payload.latestMessage.createdAt
                },
                isLoading: false
            }
         
       default:
       return state
    }

}

