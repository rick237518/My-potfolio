import {ReactComponent as Cardicon} from './shopping-bag.svg'
import React from 'react'
import './cardicon.css'
import cartAction from './cartaction'
import {connect} from 'react-redux';
const CardIcon =({cartAction}) =>{
  return( 
  <div className='cardc'> 
  <div className='icon'>
  <Cardicon className='shopping-icon'/> 
  </div>
  <div className='cardt'>
     0
     <button onClick={cartAction}> </button>
 </div>
  </div>
  )
}
const mapsdispatchToProps =(dispatch)=>{
  return {
    cartAction:()=>dispatch(cartAction())
  }
}
export default connect(null,mapsdispatchToProps)(CardIcon);