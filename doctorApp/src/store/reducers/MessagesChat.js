import { SET_MESSAGES, CREATING_MESSAGES, CREATED_MESSAGES } from '../actions/ActionTypes'

export const initialState = {
        messages:[],
        isLoading: false,
        newMessages: false
}


export const reducer = (state = initialState, action) => {

    switch(action.type){

            case SET_MESSAGES:
            return{
                ...state,
                messages: action.payload,
                isLoading: false,
                newMessages: true

            }
            case CREATING_MESSAGES:
                return{
                    ...state,
                    isLoading: true
                }
            case CREATED_MESSAGES:
                    return{
                        ...state,
                        isLoading: false
                    }
         
       default:
       return state
    }

}

