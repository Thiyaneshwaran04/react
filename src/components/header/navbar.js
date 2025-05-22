import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import './navbar.css';
import Logo from './navlogo.png';
import LoginModal from './loginModal';
import Register from '../Register/signin';

function Navbar() {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("John Doe"); // Replace with actual login logic

  const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  const handleLogin = () => {
    setShowLogin(true);
  };

  return (
    <div className="App">
      {/* Modals */}
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onOpenRegister={() => {
            setShowLogin(false);
            setShowRegister(true);
          }}
          onLoginSuccess={(name) => {
            setIsLoggedIn(true);
            setUsername(name);
            setShowLogin(false);
          }}
        />
      )}
      {showRegister && <Register onClose={() => setShowRegister(false)} />}

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-container">
          <img src={Logo} alt='Logo' className='logo' width={200} />
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </div>

        <div className="nav-content desktop">
          <ul>
            <li onClick={() => navigate('auctions')}>AUCTIONS+</li>
            <li onClick={() => navigate('buy')}>BUY</li>
            <li onClick={() => navigate('sell')}>SELL</li>
            <li onClick={() => navigate('departments')}>DEPARTMENTS</li>
            <li onClick={() => navigate('services')}>SERVICES+</li>
            <li onClick={() => navigate('reach-us')}>REACH US</li>
          </ul>
        </div>

        <div className="nav-search desktop">
          {isLoggedIn ? (
            <span className="username">Hello, {username}</span>
          ) : (
            <button onClick={handleLogin}>Login / Register</button>
          )}
          <FontAwesomeIcon icon={faSearch} className="icon" />
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <ul>
              <li onClick={() => { navigate('auctions'); closeMenu(); }}>AUCTIONS+</li>
              <li onClick={() => { navigate('buy'); closeMenu(); }}>BUY</li>
              <li onClick={() => { navigate('sell'); closeMenu(); }}>SELL</li>
              <li onClick={() => { navigate('departments'); closeMenu(); }}>DEPARTMENTS</li>
              <li onClick={() => { navigate('services'); closeMenu(); }}>SERVICES+</li>
              <li onClick={() => { navigate('reach-us'); closeMenu(); }}>REACH US</li>
              <li onClick={closeMenu}><FontAwesomeIcon icon={faSearch} className="icon" /></li>
              <li>
                {isLoggedIn ? (
                  <span className="username">Hello, {username}</span>
                ) : (
                  <button onClick={handleLogin}>Login / Register</button>
                )}
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
