import React from 'react';
import './components.css';
import united_group_transparent_logo from './Assets/united_group_transparent_logo.png';
import { IoLocation } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";




function Footer() {
  return (
    <div className='footer_section'>
      <div className="logo_text">
        <div>
        <img src={united_group_transparent_logo} alt="Logo"  />UNITED GROUP
        </div>
        <span></span>
          <div className="text_for_united">
            <h4>United Group | Pioneers in Industrial Tools & Services
Delivering excellence in industrial solutions, tools, and services for over 60 years. Committed to innovation, quality, and customer satisfaction, we empower industries with the best-in-class products and expertise.
<br />
<br />
<b style={{background:'white',fontSize:'14px'}}> <IoLocation/> Address: Prospect House 28-16-10, Raja Rammohan Roy Rd,opposite Fire Service Station, Suryabagh, Visakhapatnam - 530020</b>
<br />
<br />
© 2025 United Group. All Rights Reserved.</h4>
          </div>
      </div>
      <div className="whatsapp_mobile">
        <div className="cnt_icons">
          <section className="social_media cnt_icon">
          <FaFacebook/><FaInstagram/><FaLinkedin/>
          </section>
          <section className="whatsapp cnt_icon">
          <FaWhatsapp/> <b>WHATSAPP</b> 
          </section>
          <section className="calling cnt_icon">
            <b>Contact Us</b>
          </section>
          <section className="emailseciton cnt_icon">
            <b>Email Us</b>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Footer;