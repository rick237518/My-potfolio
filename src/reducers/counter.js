const counterReducer =(state=false,action)=>{
  switch(action.type){
    case 'INCREMENT' :
      return !state 
      case 'DECREMENT':
        return state -1 
        default :
        return state
  }
}
export default counterReducer ;