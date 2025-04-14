import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react'
import UserContext from '../usecontext/UseContext'
import { useState } from 'react'
import './navbar.css'
import Login from '../components/Login';
import UseContextProvider from '../usecontext/UseContextProvider';



function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    // const { user } = useContext(UserContext)
    // if (!user) return <div>Your are not login please login</div>

    // return <div>
    //     <div>Welcome</div>
    //     <div>{user.userName}</div>
    // </div>

    return (
        <>
            {/* <div className='navbar'>
                <div className='outerNavbar'>
                    <div>
                        <p>NEWS</p>
                    </div>
                    <div className='inNavbar'>
                        <NavLink to="/" className='navlink'> Home</NavLink>
                        <NavLink to="/about" className='navlink' > About</NavLink>
                        <NavLink to="#" className='navlink'>NewsTypes</NavLink>
                        <NavLink to="/contact" className='navlink'>Contact</NavLink>
                        <NavLink to="#" className='navlink'>Github</NavLink>
                    </div>
                    <div>
                        <button className='button'>Logout</button>
                    </div>
                </div>
            </div> */}

            <nav className="navbar navbar-expand-lg navbar-brown bg-white sticky-top">
                <div className="container-fluid">
                    <h1><i>NbyT</i></h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                            <ul className="navbar-nav ">
                                <li className="nav-item">
                                   
                                    <NavLink to="/" className='nav-link'>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/about" className='nav-link' > About</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        NewsTypes
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><NavLink className="dropdown-item" to="/General">General</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/Business">Business</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/Entertainment">Entertainment</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/Health">Health</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/Science">Science</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/Sports">Sports</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/Technology">Technology</NavLink></li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/contact" className='nav-link'>Contact</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/github" className='nav-link'>Github</NavLink>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </nav>


            



        </>
    )

}

export default NavBar



