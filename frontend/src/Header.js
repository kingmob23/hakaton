import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          className="header__logo"
          width={"64"} height={"64"} src="https://img.icons8.com/nolan/64/z-key.png"
          alt="logo"
        />
        <h2>Ztube</h2>
      </div>
      
      <div className="header__center">
        <input type="text" placeholder="Пака" />
        <button className="header__searchButton">ГООООООЛ</button>
      </div>
      
      <div className="header__right">
        {/* Пример иконок: уведомления, профиль */}
        <button className="header__icon">👤</button>
      </div>
    </div>
  );
}

export default Header;
