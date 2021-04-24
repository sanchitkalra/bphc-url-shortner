import {createStore, combineReducers} from 'redux'

import authReducer from './AuthReducer'

const store = createStore(combineReducers({
    auth: authReducer
}))

export default store