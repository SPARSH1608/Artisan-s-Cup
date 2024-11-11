import './Navbar.css';
import { assets } from '../../assets/assets';
import { useState } from 'react';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu('home')}
          className={menu == 'home' ? 'active' : ''}
        >
          Home
        </li>
        <li
          onClick={() => setMenu('Menu')}
          className={menu == 'Menu' ? 'active' : ''}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu('About')}
          className={menu == 'About' ? 'active' : ''}
        >
          About
        </li>
        <li
          onClick={() => setMenu('Contact Us')}
          className={menu == 'Contact Us' ? 'active' : ''}
        >
          Contact Us
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
