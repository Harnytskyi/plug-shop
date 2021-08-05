import {combineReducers} from 'redux'
import categoriesReducer from './categories'
import products from './products'

const rootReducer = combineReducers({
    categoriesReducer,
    products
})
export default rootReducer