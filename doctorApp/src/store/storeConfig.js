import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/User'
import postReducer from './reducers/Posts'
import menssageReducer from './reducers/Message'

const reducers = combineReducers({

    user: userReducer,
    posts: postReducer,
    message: menssageReducer
})


const storeConfig = () =>{
    
    return createStore(reducers, compose(applyMiddleware(thunk)))
}

export default storeConfig