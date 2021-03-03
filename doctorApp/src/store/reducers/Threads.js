import { THREADS_CREATED, GET_THREADS, SET_THREADS } from '../actions/ActionTypes'

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

        case THREADS_CREATED:{
        return{
            ...state,
            thread: state.thread.concat({
            ...action.payload
           })   
         }
        }
        
       default:

       return state
    }

}

