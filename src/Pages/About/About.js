import React from 'react';
import sideimg from"../../images/5 (1).png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck } from '@fortawesome/free-solid-svg-icons'
import "./about.css"
import Bounce from 'react-reveal/Bounce';

const About = () => {
    return (
        <Bounce left>

        <>
        <section className="container my-5">
            <div className=" about-container">
            <div>
                <img className="about-image" src={sideimg} alt="" />


            </div>
            <div>
                <h4>About Medikx</h4>
                <h1>We Provide Best Medical Treatment In The World</h1>
                <p>
                SevenHills Group has over two decades of experience in the healthcare sector, and is known for providing quality healthcare and valuable experience to all domestic and international patients. Our healthcare offerings are supported by a team of compassionate and dedicated medical professionals who have rich knowledge and experience in their respective domains.

                </p>
                <div className="d-flex">
                    <div>
                        <p><FontAwesomeIcon icon={faCheck}/> We Have Professional Doctor</p>
                        <p><FontAwesomeIcon icon={faCheck}/>  Satisfied Customers</p>
                    </div>
                    <div>
                        <p> <FontAwesomeIcon icon={faCheck}/> Hospital Room</p>
                        <p> <FontAwesomeIcon icon={faCheck}/> 
                        Special Nurse care</p>
                    </div>
                </div>
                <button className="btn btn-primary p-3">View Doctors</button>

            </div>
            </div>
            </section>
        </>
        </Bounce>
    );
};

export default About;