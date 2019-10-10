import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Nav.scss';

const Nav = ({user}) => {
  return (
  <nav>
    <div className='user-profile'>
    <h1>{user.name}</h1>
    <p>"{user.quote}"</p>
    <h2>Rank: {user.rank}</h2>
    </div>
    <NavLink to='/movies' className='nav-link'>Movies</NavLink>
    <NavLink to='/favorites' className='nav-link'>Favorites</NavLink>
    <Link to='/'>
      <button>Logout</button>
    </Link>
  </nav>
  )
}

export default Nav;