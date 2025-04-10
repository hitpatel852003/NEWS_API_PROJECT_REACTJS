import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './footer.css'

function Footer() {
  return (
    <div>
      <div className="container">
        <footer className="py-5">
          <div className="row">
              <div className="col-2">
                <h5>RESOURCE</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><NavLink to="/" className="nav-link p-0">Home</NavLink></li>
                  <li className="nav-item mb-2"><NavLink to="/about" className="nav-link p-0">About</NavLink></li>
                  <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0">News Types</NavLink></li>
                  <li className="nav-item mb-2"><NavLink to="/contact" className="nav-link p-0">Contact</NavLink></li>
                </ul>
              </div>

              <div className="col-2">
                <h5>FOLLOW US</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0">Github</NavLink></li>
                  <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0">Discord</NavLink></li>
                </ul>
              </div>

              <div className="col-2">
                <h5>LEGAL</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">Privacy Policy</li>
                  <li className="nav-item mb-2">Terms & Conditions</li>
                </ul>
              </div>


            <div className="col-4 offset-2">
              <h1><i>NEWS by TIME</i></h1>
              <p>"Democracy dies in darkness."</p>
              <p>"Truth is the first casualty of war."</p>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center py-4 my-4" style={{ borderTop: '1px solid brown' }}>
            <p>© 2025 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3"><NavLink to="https://www.facebook.com/" target='blank' className="fa fa-facebook"></NavLink></li>
              <li className="ms-3"><NavLink to="https://x.com/" target='blank' className="fa fa-twitter"></NavLink></li>
              <li className="ms-3"><NavLink to="https://www.google.com/" target='blank' className="fa fa-google"></NavLink></li>
              <li className='ms-3'><NavLink to="https://www.instagram.com/" target='blank' className="fa fa-instagram"></NavLink></li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer
