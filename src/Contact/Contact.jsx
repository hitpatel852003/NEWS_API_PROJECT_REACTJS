import React from 'react'
import './contact.css'

function Contact() {
  return (
    <>
      <div className='title'>
        <h1>Contact</h1>
      </div>
      <div class="contact-section">
        <div class="contact-wrapper">
          <div class="contact-grid">

            <div class="contact-info-box">
              <h2>Get in touch:</h2>
              <p>Fill in the form to start a conversation</p>

              <div class="contact-item">
                <span class="icon location-icon"></span>
                <span class="info-text">Acme Inc, Street, State, Postal Code</span>
              </div>

              <div class="contact-item">
                <span class="icon phone-icon"></span>
                <span class="info-text">+44 1234567890</span>
              </div>

              <div class="contact-item">
                <span class="icon mail-icon"></span>
                <span class="info-text">info@acme.org</span>
              </div>
            </div>


            <form class="form-container">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Telephone Number" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
