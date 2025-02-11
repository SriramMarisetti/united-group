import React from 'react';
import './components.css';
import uhc_logo_black from '../components/Assets/uhc_logo_black.png';
import ua_logo_black from '../components/Assets/ua_logo_black.png';

function Homebanner() {
  return (
    <div className='Home_banner_section'>
        <div className='banner_title'>
          <h1>UNITED GROUP Building <b>India's</b> Future with Trusted Tools for Over Six Decades</h1>
        </div>
        <div className='ventures_title'><h2>Our ventures</h2></div>
        <div className="united_cologo">
          <section className="cologs">
            <div className="uhc_logo">
            <img src={uhc_logo_black} alt="" />
            </div>
            <div className="uhc_descrip text_descrip">
              <h4>Established in 1965, specializing in a comprehensive range of Industrial Hardware, Tools, and Services</h4>
            </div>
          </section>

          <section className="cologs">
          <div className="ua_logo">
            <img src={ua_logo_black} alt="" />
          </div>
          <div className="ua_descrip text_descrip">
            <h4>Established in 1982, specializing in Lighting Fixtures, Agricultural Hardware, Tools, and Services.</h4>
          </div>
          </section>

          <section className="cologs">
          <div className="uni_fin_logo">
            <h1>united finance &nbsp; & leasing corporation</h1>
          </div>
          <div className="uni_fin_descrip text_descrip">
            <h4>Estd 1985 a Financial Investment Wing</h4>
          </div>
          </section>

          <section className="cologs">
          <div className="uni_enter_logo">
          <h1>united enterprises</h1>
          </div>
          <div className="uni_enter_descrip text_descrip"><h4>Estd in 1992 our Real Estate wing</h4></div>
          </section>
        </div>


    </div>
  )
}

export default Homebanner;