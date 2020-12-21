import React from 'react';
import './menu.css'
import {Link} from 'react-router-dom';


const Menuitem =({title,imageUrl,size})=> {

return(
        <div style={{
          backgroundImage:`url(${imageUrl})`
        }} className= {`size=${size} menu-item`} >
          <div className='content'>
         
          <Link to='/About'>  <span className='subtitle'>{title}</span></Link>
          </div>
          </div>
          
)
}
export default Menuitem;