import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FunctionComponent = () => {
  return (
    <nav>
      <div className='nav-wrapper purple darken-4 px-1'>
        <a href='#' className='brand-logo'>
          React-Typescript
        </a>
        <ul className='right hide-on-med-and-down'>
          <li>
            <NavLink to='/'>ToDo List</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About Us</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
