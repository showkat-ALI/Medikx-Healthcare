import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import "./signin.css"
import {useLocation,useHistory} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faKey } from '@fortawesome/free-solid-svg-icons'
import {faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';





const Signin = () => {
  const location= useLocation()
  const {signinWithgoogle,signinwithEmail,getEmail,getPassword,err} = useAuth()
  // .then((result)=>setUser(result.user))
  const history= useHistory()
  const redirectUri= location.state?.from || "/home"
  const handlegoogleLogin=()=>{
    signinWithgoogle()
    .then(result =>{
      history.push(redirectUri)

    })

  }
    return (
      <>
      <form onSubmit={signinwithEmail}>
 <div className="form container my-3">
            <div className="input">
                <div className="inputBox">
              <p style={{color:"white",fontSize:"2.5rem"}}>Login</p>


                    <label htmlFor="">Email</label>
              <FontAwesomeIcon
              style={{color:"white"}}
                icon={faEnvelope}/>

                    <input
                    placeholder="Enter your Email"
                    autoComplete="current-email"
                    onBlur={getEmail}
                     type="email"/>
                </div>
                
                <div className="inputBox">

                    <label htmlFor="">Password</label>
                    <FontAwesomeIcon icon={faKey} 
                    style={{color:"white"}} />
                    <input
                    autoComplete="current-password"
                    placeholder="Enter your Password"
                    onBlur={getPassword}
                     type="password"/>
                </div>
                <div className="inputBox">
                    <input type="submit" name="" value="Sign In"/> 
                </div>
                <p className="text-danger">{err}</p>
                <p>

                  <span style={{color:"white"}}>
                  Dont have an account?</span>
                  <br/>
                  <NavLink className="" to="/signup"> 
                   create account
                </NavLink>
                </p>
            </div>
            
            
        </div>
</form>
<div className="d-flex justify-content-center" >
        <div className="social google-button" >
                <button  onClick={handlegoogleLogin} className="justify-content-center">
                  <span className="d-flex" >
                  <i className="fab fa-google"></i> <p style={{color:"black"}}>Signin with Google</p>
                  </span>
                  </button>
                
            </div>
            </div>
</>
    );
};

export default Signin;