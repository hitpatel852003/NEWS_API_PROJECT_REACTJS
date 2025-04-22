import React from 'react'
import './contact.css'
import ChangeSwitch from '../changeSwitch/ChangeSwitch'
import { useSelector } from 'react-redux'

function Contact() {
  const theme = useSelector((state) => state.theme.mode)
  return (
      <div className={`bg-${theme === "dark" ? "light" : "dark"}`}>
        <div className='title'>
          <h1>Contact</h1>
        </div>
        <div className={`contact-section bg-${theme === "dark" ? "light" : "dark"}`}>
          <div className="contact-wrapper">
            <div className="contact-grid">

              <div className={`contact-info-box `}>
                <h2>Get in touch:</h2>
                <p>Fill in the form to start a conversation</p>
                <div className="contact-item">
                  <span className="icon location-icon"></span>
                  <span className="info-text">Acme Inc, Street, State, Postal Code</span>
                </div>
                <div className="contact-item">
                  <span className="icon phone-icon"></span>
                  <span className="info-text">+44 1234567890</span>
                </div>
                <div className="contact-item">
                  <span className="icon mail-icon"></span>
                  <span className="info-text">info@acme.org</span>
                </div>
              </div>
              <form className="form-container">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email" />
                <input type="tel" placeholder="Telephone Number" />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Contact
