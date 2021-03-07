import { SET_MESSAGES } from '../actions/ActionTypes'

export const initialState = {
        messages:[]
}


export const reducer = (state = initialState, action) => {

    switch(action.type){

            case SET_MESSAGES:
            return{
                ...state,
                messages: action.payload,
            }
         
       default:
       return state
    }

}

