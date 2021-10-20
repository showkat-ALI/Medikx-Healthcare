import React from 'react';
import {Carousel} from "react-bootstrap"
import firstimage from "../../../images/image-1.jpg"
import secondimage from "../../../images/image-2.jpg"
import "./topbanner.css"
const Banner = () => {
    return (
        <Carousel className="my-5" fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={firstimage}
      alt="First slide"
    />
    <Carousel.Caption className="carosel-text-container" >
      <h1 className="carosel-heading">Welcome to Medikx</h1>
      <p className="carosel-sub-head">Exceptional Care For Every Patient.</p>
      <button className=" btn-hover carosel-button read-button ">Read More</button>
      
      <button className="btn-hover contact-button">Contact us</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={secondimage}
      alt="Second slide"
    />

    <Carousel.Caption className="carosel-text-container">
      <h1 className="carosel-heading">Welcome to Medikx</h1>
      <p className="carosel-sub-head">We have Qualified Doctor</p>
      <button className="read-button btn-hover  carosel-button">Read More</button>
      
      <button className="btn-hover contact-button">Contact us</button>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
    );
};

export default Banner;