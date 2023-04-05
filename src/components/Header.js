import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div><Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://www.seekpng.com/png/full/201-2018208_clipart-restaurant-icon-restaurant-symbol-white-png.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
           chop stick
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header