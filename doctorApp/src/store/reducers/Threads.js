import { THREAD_CREATED, GET_THREAD, SET_THREAD, CREATING_THREAD } from '../actions/ActionTypes'

export const initialState = {
    thread:
        [{id: 0,
            latestMessage:{
                text: '',
                createdAt: new Date().getTime()
            }}],
}

export const reducer = (state = initialState, action) => {

    switch(action.type){

        case SET_THREAD:
        return{
            ...state,
            thread: state.thread.concat({
            ...action.payload
           })   
         }
        case CREATING_THREAD:

        return{
           ...state,
            isLoading: true
        }

        case GET_THREAD:

            return{
               ...state,
                isLoading: true
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

