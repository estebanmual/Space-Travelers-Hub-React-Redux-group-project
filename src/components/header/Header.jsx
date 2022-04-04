import React from 'react';
import logo from '../../images/planet.svg';
import style from './Header.module.css';

function Header() {
  return (
    <nav className={style.Header}>
      <div className={style.HeaderLeft}>
        <img className={style.HeaderLogo} src={logo} alt="Space Travelers Hub logo" />
        <h1 className={style.HeaderTitle}>Space Travelers&apos; Hub</h1>
      </div>
      <div />
    </nav>
  );
}

export default Header;
