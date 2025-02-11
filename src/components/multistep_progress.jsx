import React from 'react';
import './components.css';
  
function Multistepprogress() {
  return (
    <div className='multistepprogress'>
        <h1>Setting Standards in the Industrial sector</h1>
       <div className="procedure_steps">
       <ul className="stepslist">
        <li className='step_item'>
        <span class="step__count">1</span>
        <span class="step__description">
        UNITED GROUP analyzes customer requirements to provide tailored industrial hardware and tool solutions.</span>
        </li>
        <li className='step_item'>
        <span class="step__count">2</span>
        <span class="step__description">Offers a diverse range of trusted brands and products to meet industry-specific demands.</span>
        </li>
        <li className='step_item'>
        <span class="step__count">3</span>
        <span class="step__description">Ensures efficient delivery and availability of products across Andhra Pradesh and beyond.</span>
        </li>
        <li className='step_item'>
        <span class="step__count">4</span>
        <span class="step__description">Provides dedicated customer assistance and expertise for hassle-free operations</span>
        </li>
        <li className='step_item'>
        <span class="step__count">5</span>
        <span class="step__description">Establishes long-term partnerships with clients through quality, consistency, and innovation</span>
        </li>
        
       </ul>
       </div>
       <br />
       <div className='uniq_united'>
        <h1 style={{backgroundColor:"#f3f4f5",padding:'20px',marginLeft:'-20px'}}>Why UNITED GROUP is Unique</h1> 
        <p style={{backgroundColor:"#f3f4f5"}}>With over 80 years of expertise, UNITED GROUP is a trusted problem-solver in the hardware industry. Beyond supplying products, it bridges the gap between customers and manufacturers, providing tailored solutions and valuable feedback to enhance product quality.  
        By addressing industry challenges with innovation and customer focus, UNITED GROUP stands as a reliable partner, delivering unmatched value and setting standards in the hardware sector.</p>
          
       </div>
      
   
    </div>
  )
}

export default Multistepprogress;