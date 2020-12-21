
const addItem=(item)=>{
  return{
    type:'ADD_TO_CARD',
    payload:item
  }
}
export default addItem;