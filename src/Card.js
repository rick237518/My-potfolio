import React from 'react'
import './Card.css'
const CardDropdown =()=>{
const card=[
  {name:'My tech and Github-Profile:https://github.com/rick237518'},
  
]
  return(
<div className='CardDropdown'>
<div className='cart-item'>
  {card.map(car=>(<h1>{car.name}</h1>))}
</div>

</div>
  )
}
export default CardDropdown;