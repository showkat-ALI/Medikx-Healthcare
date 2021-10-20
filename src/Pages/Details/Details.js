import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";
import "../Home/Service/service.css"

const Details = () => {
  const { id } = useParams();
  const [services, setServices] = useState({});
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/showkat-ALI/data/main/services.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setServices(data.find((service) => service.id === Number(id)));
      });
  }, []);
  const{name,img,desc,price}=services;
  return (
    <div style={{height:"100vh"}}>
    <Card className="service-card container" style={{ width: '18rem'}}>
    <div className="mx-auto" style={{padding:"5px"}}>
  <img src={img} alt=""/>
  </div>
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <p> booking: $ {price}</p>
    <Card.Text>
      {
          desc
      }
    </Card.Text>
    
  </Card.Body>
</Card>  
</div>          
  );
};

export default Details;
