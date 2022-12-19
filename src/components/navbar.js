import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';

const Navbar = () => (
  <header>
    <nav>
      <img width="50" height="50" alt="logo" src={logo} />
      <ul>
        <li>
          <NavLink
            to="profile"
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            myprofile
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
