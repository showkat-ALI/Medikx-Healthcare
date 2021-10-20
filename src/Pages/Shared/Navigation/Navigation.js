import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from "../../../images/logo-wide@2x.png"
import useAuth from "../../../Hooks/useAuth"
import "./navi.css"
const Navigation = () => {
  const{user,logOut}=useAuth()
  // Creating navigation
    return (
<Navbar className="nav-container" expand="lg">
  <Container>
    <Navbar.Brand href="#home"><img width="150px"  src={logo} alt="top-log" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto align-items-center">
        <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
        <Nav.Link as={NavLink} to="/contact">Contact us</Nav.Link>
        
        {
          user.email ?
          (
          <>
           <span>{user.displayName}</span>
           <button onClick={logOut} className="btn btn-warning ms-1">Sign out</button>
           </>
           )
          :
          (
          <>
        <Nav.Link as={NavLink} to="/signup">Signup</Nav.Link>
          <Nav.Link as={NavLink} to="/signin">Signin</Nav.Link>
          </> 
          )
          }
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Navigation;