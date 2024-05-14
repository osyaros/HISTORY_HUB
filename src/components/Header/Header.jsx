import React from 'react'
import  './Header.scss'
import { useNavigate, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import data1 from '../../mocks/mock1.js';
import data2 from '../../mocks/mock2.js';
import data3 from '../../mocks/mock3.js';
const Header = () => {
    const navigate = useNavigate();
  return (
    <nav>
      <div className="navbar">
        <div className="container nav-container">
        <div className="logo" onClick={()=>navigate('/')}>
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
            <li onClick={()=>navigate('/')}><a href="#">Главная</a></li>
            <li onClick={()=>navigate('/school_of_faithful', {state:{category:'Школа верных'}})}>Школа верных</li>
            <li onClick={()=>navigate('/persons', {state:{category:'Личности'}})}>Личности</li>
            <li onClick={()=>navigate('/sights', {state:{category:'Экспонаты'}})}>Экспонаты</li>
            <li onClick={()=>navigate('/events', {state:{category:'События'}})}>События</li>
          </div>
        </div>
      </div>
  </nav> 
  )
};
export default Header;
