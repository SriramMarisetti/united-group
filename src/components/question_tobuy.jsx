import React from 'react';
import './components.css';
import before_buying from '../components/Assets/before_buying.jpg';
import { BsChevronBarRight } from "react-icons/bs";



function Question_tobuy() {
  return (
    <div className='question_tobuy'>
      <h1>Prepare a few questions before buying any <br /> New Tool or Product</h1>
        <br />
        <div className="info_img">
           <div className="buying_info">
            <h5>Purchasing Tools is an investment that demands careful thought.  To ensure you choose the right product,  ask these SIX essential questions : </h5>
            <div className='paragraph'> 
           <p><BsChevronBarRight/> What Are My Exact Needs?</p>
           <p><BsChevronBarRight/> Is Customer Support Reliable?</p>
           <p><BsChevronBarRight/> Is It Compatible with My Current Setup?</p>
           <p><BsChevronBarRight/> What is the Product's Warranty and Support?</p>
           <p><BsChevronBarRight/> Does It Offer Value for Money?</p>
           <p><BsChevronBarRight/> What Are the Product's Key Features?</p>
           </div>
          <p>Before buying a new Tool or product, focus on understanding your needs, checking compatibility, evaluating warranty and support, and ensuring value for money. Asking these key questions will guide you toward a purchase that meets your expectations and provides long-term satisfaction.</p>
           </div>
           <div className="buying_img">
           <img src={before_buying} alt="" />
           </div>
        </div>
        
    </div>
  )
}

export default Question_tobuy;