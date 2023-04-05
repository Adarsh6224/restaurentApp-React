import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Restcard({restaurent}) {
    console.log(restaurent);
  return (
    <Col sm={12} md={6} lg={4} x1={3}>
        <Link to={`viewrest/${restaurent.id}`} style={{textDecoration:"none", color:"white"}}>

            
        
        
          <Card className='mt-3' >
      <Card.Img className='p-3' variant="top" src= {restaurent.photograph} />
      <Card.Body>
        <Card.Title>{restaurent.name}</Card.Title>
        <Card.Text>
         {restaurent.neighborhood}
        </Card.Text>
        <Card.Text>
         {restaurent.address}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </Link>
    </Col>
  )
}

export default Restcard