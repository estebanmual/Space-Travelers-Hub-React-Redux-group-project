import React, { useId } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/planet.svg';
import style from './Header.module.css';

function Header() {
  const navLinks = [
    {
      id: useId(),
      path: '/',
      name: 'Rockets',
    },
    {
      id: useId(),
      path: '/Missions',
      name: 'Missions',
    },
    {
      id: useId(),
      path: '/MyProfile',
      name: 'My Profile',
    },
  ];

  return (
    <nav className={style.Header}>
      <div className={style.HeaderLeft}>
        <img className={style.HeaderLogo} src={logo} alt="Space Travelers Hub logo" />
        <h1 className={style.HeaderTitle}>Space Travelers&apos; Hub</h1>
      </div>
      <div className={style.HeaderRight}>
        {navLinks.map(({ id, path, name }) => (
          <NavLink className="aTag" key={id} to={path}>
            {name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Header;
