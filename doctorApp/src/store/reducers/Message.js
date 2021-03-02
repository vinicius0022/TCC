import { SET_MESSAGE} from '../actions/ActionTypes'

export const initialState = {

    title: '',
    text: ''
}

export const reducer = (state = initialState, action) =>{

    switch (action.type){

        case SET_MESSAGE:
            return{
                ...state,
                title: action.payload.title,
                text: action.payload.text
            }

            default:
                return state
    }
}
