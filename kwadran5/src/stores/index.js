import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import numberReducers from "./reducers/numberReducers"

const reducer = combineReducers({
    numberReducers
  })

const store = createStore(reducer, applyMiddleware(thunk))

export default store;
