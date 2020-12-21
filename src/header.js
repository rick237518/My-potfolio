import React from 'react';
import {Link} from 'react-router-dom';
import CardDropdown from './Card'
import './mystyle.css'
const Header=()=>{
  return(
   <div className='stlye'>
          <Link to='/'><p>Home</p></Link>
   <Link to='/About'><p>About</p></Link>
      
        <CardDropdown/>

</div>
   
  )
}

export default Header;