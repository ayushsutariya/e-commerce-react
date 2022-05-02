import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
<header className="header-area header-sticky">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <nav className="main-nav">
          {/* ***** Logo Start ***** */}
          <NavLink href="#top" to={"/"} className="active navlink scrollto logo">
            <img src="assets/images/logo.png" />
          </NavLink>
          {/* ***** Logo End ***** */}
          {/* ***** Menu Start ***** */}
          <ul className="nav">
            <li className="scroll-to-section"><NavLink href="#top" to={"/"} className="active navlink scrollto">Home</NavLink></li>
            <li className="scroll-to-section"><NavLink href="#men" to={"/Men"} className="navlink scrollto">Men's</NavLink></li>
            <li className="scroll-to-section"><NavLink href="#women" to={"/Women"} className="navlink scrollto">Women's</NavLink></li>
            <li className="scroll-to-section"><NavLink to={"Kids"} className="navlink scrollto" href="#kids">Kid's</NavLink></li>
            <li className="submenu">
              <a href="javascript:;">Pages</a>
              <ul>
                <li><NavLink to={"/About"} className="navlink scrollto" href="about.html">About Us</NavLink></li>
                <li><NavLink to={"/Products"} className="navlink scrollto" href="products.html">Products</NavLink></li>
                <li><NavLink to={"/SingleProduct"} className="navlink scrollto" href="single-product.html">Single Product</NavLink></li>
                <li><NavLink to={"/ContactUs"} className="navlink scrollto" href="contact.html">Contact Us</NavLink></li>
              </ul>
            </li>
            <li className="submenu">
              <a href="javascript:;">Features</a>
              <ul>
                <li><a href="#">Features Page 1</a></li>
                <li><a href="#">Features Page 2</a></li>
                <li><a href="#">Features Page 3</a></li>
                <li><a rel="nofollow" href="https://templatemo.com/page/4" target="_blank">Template Page 4</a></li>
              </ul>
            </li>
            <li className="scroll-to-section"><NavLink to={"/Explore"} className="navlink scrollto" href="#explore">Explore</NavLink></li>
          </ul>        
          <a className="menu-trigger">
            <span>Menu</span>
          </a>
          {/* ***** Menu End ***** */}
        </nav>
      </div>
    </div>
  </div>
</header>

    );
}

export default Header;