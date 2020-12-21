import counterReducer from './counter';
import loggedReducer from './isLogged';
import Cart from './cart'
import {combineReducers} from 'redux';
const allReducers= combineReducers({
  counter:counterReducer,
  islogged:loggedReducer,
  Cart:Cart
})
export default allReducers ;