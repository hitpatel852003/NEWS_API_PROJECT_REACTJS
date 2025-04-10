import React from 'react'
import './login.css'
import UserContext from '../usecontext/UseContext'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


function Login() {
    const { user, setUser } = useContext(UserContext)

    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    // const [store, setStore] = useState([]);

    function changeName(e) {
        setUserName(e.target.value);
    }

    function changePassword(e) {
        setPassword(e.target.value);
    }

    function handleClick(e) {
        if (userName.trim() === "" && password.trim() === "")
            return
        e.preventDefault()
        setUser({ userName, password });

    }

    function showvalue() {
        if (!user) {
            return <div>Your are not login please login</div>
        }
        else {
            return <div>welcome - {user.userName}</div>
        }
    }

    localStorage.setItem('username', userName);
    localStorage.setItem('password', password);

    return (
        <>
            <div className='outerLogin'>
                <div className='login'>
                    <div className='title'>
                        <h1>Login Page</h1>
                    </div>
                    <br />
                    <label htmlFor="" className='lable' id='lable'>UserName</label>
                    <input type="text" placeholder='enter your name' className='input' value={userName} onChange={changeName} />
                    <label htmlFor="" className='lable' id='lable1'>Password</label>
                    <input type="password" placeholder='enter your password' className='input' value={password} onChange={changePassword} />
                    <br />
                    <button className='button' onClick={handleClick}>Login</button>
                    <br />
                    <div>{showvalue()}</div>
                </div>


                {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Login
                </button>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">

                                <form>
                                    <div class="mb-3">
                                        <label htmlFor="" className='lable' id='lable'>UserName</label>
                                        <input type="text" placeholder='enter your name' className='input' value={userName} onChange={changeName} />
                                    </div>
                                    <div class="mb-3">
                                        <label htmlFor="" className='lable' id='lable1'>Password</label>
                                        <input type="password" placeholder='enter your password' className='input' value={password} onChange={changePassword} />
                                    </div>
                                    <button className='button' onClick={handleClick}>submit</button>
                                    <div>{showvalue()}</div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div> */}
            </div>


        </>
    )

}

export default Login
