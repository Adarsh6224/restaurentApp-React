import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <div>
        <Card className="text-center">
    <Card.Header>Address</Card.Header>
    <Card.Body>
      <Card.Title>Calicut Paragon
        Mattar Al Tayer Bldg., 20 B Street, Al Karama
        Dubai ,UAE

</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
      
    </Card.Body>
    <Card.Footer className="text-muted">© Copyright 2017 - chopstix Group , All Rights Reserved.</Card.Footer>
  </Card>
  </div>
  )
}

export default Footer