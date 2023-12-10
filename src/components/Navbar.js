import React from 'react'
import $ from 'jquery';
import Logo from '../assets/logo.svg';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';


$(document).ready(function(){
  $('.rightSide a').click(function () {
    $(this).addClass('active').siblings('.rightSide a').removeClass('active');
    if($('.rightSide a').hasClass('active')){
      $(this).css('opacity','1');
    }
  });
});


function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} alt='img' />
      </div>
      <div className="rightSide">
        <Link className='active' to="/">Home</Link>
        <Link to="/getStore">Get Store</Link>
        <Link to="/product">Products</Link>
        <Link to="/about">About Us</Link>
      </div>
    </div>
  )
}

export default Navbar
