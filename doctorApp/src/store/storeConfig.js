import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {reducer as UserReducer} from './reducers/User'
import {reducer as patientReducer} from './reducers/Patient'
import {reducer as menssageReducer} from './reducers/Message'
import {reducer as threadReducer } from './reducers/Threads'


//Estado global da aplicação
const reducers = combineReducers({

    user: UserReducer,
    patient: patientReducer,
    message: menssageReducer,
    thread: threadReducer
})


const storeConfig = () =>{
    
    return createStore(reducers, compose(applyMiddleware(thunk)))
}

export default storeConfig