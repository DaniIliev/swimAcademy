import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = () => {
  return (
    <nav>
        <ul className='navigation'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='summerCamp'>Summer Camp</Link></li>
            <li>About us</li>
            <li>Last news</li>
            <li>Coaches</li>
            <li>Athletes</li>
        </ul>
    </nav>
  )
}

export default NavBar