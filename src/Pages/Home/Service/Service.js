import {Link} from "react-router-dom"
import React, { useState } from 'react';
import { Card,Button } from 'react-bootstrap';
import "./service.css"

const Service = ({service}) => {
    const{id,img,name,price,desc}=service


    return (
        <>
<Card className="service-card" style={{ width: '18rem'}}>
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
    <Link to={`/details/${id}`}>
    <Button variant="primary">Details</Button>
    </Link>
  </Card.Body>
</Card>            
</>
    );
};

export default Service;