
import { Navbar,Nav, Container, Image } from "react-bootstrap";

import {LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
  const auth = localStorage.getItem("user");
  
  return (
    <>
      <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark" style={{height:"100px"}}>
        <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <Image
              src="images/logo11.png" 
              alt="logo" className="App-logo"
              style={{ height: "150px" }}
            />
          </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
           
             <Nav className="ms-auto">
                  
             <LinkContainer to="/cart">
             <Nav.Link>Cart</Nav.Link>
             </LinkContainer>
            {
              auth? <div>
             <LinkContainer to="/contact">
             <Nav.Link>Contact</Nav.Link>
             </LinkContainer>
             </div>:<LinkContainer to="/login">
             <Nav.Link>Login</Nav.Link>
             </LinkContainer>
            }
             
             </Nav>
                
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;