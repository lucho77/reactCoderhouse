import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CarWidget from './CarWidget';

function NavBar() {
    return (
      <>
  <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Celulares</Nav.Link>
        <Nav.Link href="#link">Tablets</Nav.Link>
        <Nav.Link href="#link">Notebooks</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    <Navbar.Brand href="">
    <CarWidget/>
    </Navbar.Brand>
  </Container>
</Navbar>
</>
  );
}

export default NavBar;
