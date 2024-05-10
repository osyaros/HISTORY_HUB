import React from 'react'
import  './Header.scss'
const Header = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="container nav-container">
        <div className="logo">
            <span className="first">HISTORY</span>
            <span>HUB</span>
        </div>
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>  
          <div className="menu-items">
            <li><a href="#">Главная</a></li>
            <li><a href="#">Школа верных</a></li>
            <li><a href="#">Личности</a></li>
            <li><a href="#">Экспонаты</a></li>
          </div>
        </div>
      </div>
  </nav> 
  )
};
export default Header;
