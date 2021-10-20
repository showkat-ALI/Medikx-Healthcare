import {useState,useEffect} from 'react';
import Service from '../Service/Service';
import "./services.css"

const Services = () => {
    const[services,setServices]=useState([])
    useEffect(()=>{
        fetch('/services.json')
        .then(result =>result.json())
        .then(data => setServices(data))

    },[])
    return (
        <div className="container">
            <div className="text-center service-text">
            <h4>
            Our services
            </h4>
            <h1>
            What We’re Offering
            </h1>
            </div>
            <div className="service-container">
            {
                services.map(service => <Service key={service.id} service={service}></Service>)
            }
            </div>
            
        </div>
    );
};

export default Services;