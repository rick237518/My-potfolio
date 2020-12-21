import {addItemToCart} from './addItemsUtils'
const initial ={
  hidden:false,
  cartItems:[]

}
const Cart =(state=initial,action)=>{
  switch(action.type){
    case 'TOGGLE_CART' :
      return {
        hidden:!state.hidden
      }
      case'ADD_TO_CARD':
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems,action.payload)
      };
      default: return state
  }
}
export default Cart;