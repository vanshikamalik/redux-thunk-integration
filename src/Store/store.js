import { createStore,combineReducers, applyMiddleware } from 'redux'
import ProductReducer from '../Reducers'
import thunk from 'redux-thunk'

const store = createStore(ProductReducer, applyMiddleware(thunk))

export default store