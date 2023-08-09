/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import "./navbar.css"
import { GiHamburgerMenu } from "react-icons/gi";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";


const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>E</span>zy
            <span>G</span>raphic
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
         
          <li><a href="/">HOME</a></li>
          
              <li><a href="/cdr">CDR</a></li>
              <li><a href="/psd">PSD</a></li>
              <li><a href="/jpg">JPG</a></li>
              
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                 href="https://www.facebook.com/login/"
                 target="_ezygraphic">
                 <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                 href="https://www.instagram.com/accounts/login/"
                 target="_ezygraphic">
                 <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
               href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den"
               target="_ezygraphic">
               <FaTwitterSquare className="twitter" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
      

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};



  
  export default Navbar;