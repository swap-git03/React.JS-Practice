import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div className='nav'>
        <h1>Swappppp</h1>
        <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/About'><li>About</li></Link>
            <Link to='/Contact'><li>Contact</li></Link>
        </ul>
    </div>
  )
}

export default Nav
