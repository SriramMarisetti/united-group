import React, { useRef, useState } from "react";
import "./components.css";
import { AiOutlineUser } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { TbHandClick } from "react-icons/tb";
import emailjs from "@emailjs/browser";

const Getquote = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false); // State for pop-up

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_84m7vgl", "template_gldhvfm", form.current, {
        publicKey: "EQngmiK-Q46ZDV69i",
      })
      .then(
        () => {
          setShowPopup(true); // Show pop-up
          setTimeout(() => setShowPopup(false), 3000); // Hide after 3 seconds
          form.current.reset(); // Reset form fields
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="getquotation">
      <label htmlFor="email" className="label_name">Leave a Request</label>
      <form ref={form} onSubmit={sendEmail}>
      <div className="form-container-getquote">
        <div className="name_input">
          <AiOutlineUser />
          <input id="email" name="email" type="email" placeholder="Enter Your Email" required />
        </div>

        <div className="email_input">
          <BsTelephone />
          <input id="phone" name="phone" placeholder="Enter Your Number" required />
        </div>
        </div>
        <button type="submit" className="solbutton">
          <TbHandClick /> For Clear Solutions
        </button>
      </form>

      {/* Pop-up Confirmation */}
      {showPopup && (
        <div className="popup">
          <p>✅ Your request has been submitted successfully!</p>
        </div>
      )}
    </div>
  );
};

export default Getquote;
