import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import classes from './Navbar.module.css';

const Navbar = () => (
  <header>
    <nav>
      <div className={classes.logo}>
        <img width="50" height="50" alt="logo" src={logo} />
        <div>Space Travelers Hub</div>
      </div>
      <ul>
        <li>
          <NavLink
            to="/rockets"
            className={(data) => (data.isActive ? classes.active : '')}
          >
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/missions"
            className={(data) => (data.isActive ? classes.active : '')}
          >
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className={(data) => (data.isActive ? classes.active : '')}
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
