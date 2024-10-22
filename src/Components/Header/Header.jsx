import React from 'react'
import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
        <h3 className="company-name-heading">Zidio</h3>
        <div className="header-options">
            <NavLink to={'/'}><h3>Home</h3></NavLink>
            <NavLink to={'/Profile'}><h3>Profiles</h3></NavLink>
            {/* <NavLink to={'/Reviews'}><h3>Reviews</h3></NavLink> */}
            <NavLink to={'/Careers'}><h3>Carrers</h3></NavLink>
        </div>
    </div>
  )
}

export default Header