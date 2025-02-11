import React from 'react';
import './components.css';
import united_group_transparent_logo from './Assets/united_group_transparent_logo.png';
import { NavLink } from "react-router";
import { LiaDownloadSolid } from "react-icons/lia";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import Navbar from './navbar';






function Header() {

  const notPhone = useMediaQuery({ query: '(min-width: 768px)' });
  return (
    <>
    {!notPhone &&(
        <Navbar />
    )}
    
    {notPhone && 
      (<header className='header'>
      <div className='logo'>
      <NavLink to='/' className="navlink_logo">
          <img src={united_group_transparent_logo} alt="Logo"  /> UNITED GROUP
        </NavLink> 
      </div>
      <div className='navlinks menu'>
        <nav className='header_nav nav'>
          <ul className="nav_list">
            <li className="nav_item"><a href="#" aria-current="page" className='nav_link'>Home</a></li>
            <li className="nav_item"> <a href="#" aria-current="page" className='nav_link'>get a quote</a></li>
            <li className="nav_item"> <a href="#" aria-current="page" className='nav_link'>reviews</a></li>
            <li className="nav_item"> <a href="#" aria-current="page" className='nav_link'>refer a friend</a></li>
            <li className="nav_item"> <a href="#" aria-current="page" className='nav_link'>brochure &nbsp; <LiaDownloadSolid/></a></li>
          </ul>
        </nav>
      </div>
      <div className='location'>
        <button className='loactionbtn'> <a href="https://www.google.com/maps/dir//Suryabagh,+Jagadamba+Junction,+Visakhapatnam,+Andhra+Pradesh+530020/@17.711538,83.2161371,25602m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3a39431c578e43a9:0xa9568cccee1a59bb!2m2!1d83.2985389!2d17.7115552?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"><FaLocationDot/></a></button>
      </div>
      <div className='contact_support'>
     <a href="https://wa.me/8885514777">Whatsapp Us <FaWhatsapp/></a>
      </div>
      <div className='social_support'>
     <a href="https://wa.me/8885514777"> <FaInstagram color="#e1306c"/></a>
     <a href="https://wa.me/8885514777"> <FaFacebook/></a>
     <a href="https://wa.me/8885514777"> <IoLogoYoutube color="red"/></a>
      </div>
        





    </header>)}
    </>
  )
}

export default Header
