import { Card } from "react-bootstrap";
import img from "../../images/bg7.jpg"
import Roll from 'react-reveal/Roll';
import "./contact.css"
function Contact(){
return (
    <Roll left cascade>

    <Card className="contact-card h-100 container my-5 text-center">
  <Card.Img className="card-image" src={img} alt="Card image" />
  <Card.ImgOverlay className="card-texts">
    <Card.Title className="card-top-text mt-3">YOU WANT TO DISCUSS WITH OUR DOCTOR</Card.Title>
    <Card.Text className="card-mid-text">
      <h1>Call Us Our Doctor For Any Emergency Help</h1>
    </Card.Text>
    <Card.Text ><p className="contact-no mx-auto"><button className="btn btn-secondary">+7987779877</button></p></Card.Text>
  </Card.ImgOverlay>
</Card>
</Roll>


);
};
export default Contact