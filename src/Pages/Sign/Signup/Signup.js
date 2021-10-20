import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import "../Signin/signin.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faKey } from '@fortawesome/free-solid-svg-icons'
import {faUser } from '@fortawesome/free-solid-svg-icons'
import {faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';




const Signup = () => {
  const {signinWithgoogle,signupWithEmail,getEmail,err,getPassword,getName} = useAuth()
  
    return (
      <>
      <form onSubmit={signupWithEmail}>
 <div className="form container my-3">
            <div className="input">
              <p style={{color:"white",fontSize:"2.5rem"}}>sign up</p>

                <div className="inputBox">


                    <label htmlFor="">User Name</label>
              <FontAwesomeIcon
              style={{color:"white"}}
                icon={faUser}/>

                    <input
                    placeholder="Enter your name"
                    autoComplete="current-name"
                    onBlur={getName}
                     type="text" required/>
                </div>
                <div className="inputBox">


                    <label htmlFor="">Email</label>
              <FontAwesomeIcon
              style={{color:"white"}}
                icon={faEnvelope}/>

                    <input
                    placeholder="Enter your Email"
                    autoComplete="current-email"
                    onBlur={getEmail}
                     type="email" required/>
                </div>
                
                <div className="inputBox">

                    <label htmlFor="">Password</label>
                    <FontAwesomeIcon icon={faKey} 
                    style={{color:"white"}} />
                    <input
                    placeholder="Enter your Password"
                    autoComplete="current-password"
                    onBlur={getPassword}
                     type="password" required/>
                </div>
                <p className="text-danger">{err}</p>
                <div className="inputBox">
                    <input type="submit" name="" value="Sign Up"/> 
                </div>
                <p>
                  <span style={{color:"white"}}>
                  Already have an account?</span>
                  <br/>
                  <NavLink className="" to="/signin"> 
                   Log in
                </NavLink>
                </p>
            </div>
            
            
        </div>
</form>
<div className="d-flex justify-content-center" >
        <div className="social w-25" >
                <button  onClick={signinWithgoogle} className="justify-content-center">
                  <span className="d-flex" >
                  <i className="fab fa-google"></i> <p style={{color:"black"}}>Signin with Google</p>
                  </span>
                  </button>
                
            </div>
            </div>
</>
    );
};

export default Signup;