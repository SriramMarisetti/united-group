import React from 'react';
import './components.css';
import { useFormik } from 'formik';
import { AiOutlineUser } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { TbHandClick } from "react-icons/tb";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';



const Getquote = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_84m7vgl', 'template_gldhvfm', form.current, {
        publicKey: 'EQngmiK-Q46ZDV69i',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
   /* const formik = useFormik({
      initialValues: {
        email: '',
      },
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    }); */
    return (
        <div className='getquotation'>
          <label htmlFor="email" className='label_name'>Leave a Request</label>
      <form ref={form} onSubmit={sendEmail}>
        <div className='name_input'>
          <AiOutlineUser/>
        <input
          id="email"
          name="email"
          type="email"
          placeholder='Enter Your Email'
        />
        </div>
       
        <div className='email_input'>
          <BsTelephone/>
         <input
          id="phone"
          name="phone"
          placeholder='Enter Your Number'
        />
        </div>
  
        <button type="submit" className="solbutton"> <TbHandClick/>For Clear Solutions</button>
      </form>
  
      </div>
    );
  };
  export default Getquote;