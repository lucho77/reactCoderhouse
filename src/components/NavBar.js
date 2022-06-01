import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CarWidget from './CarWidget';

function NavBar() {
    return (
      <>
  <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">Ecommerce</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/category/phone">Celulares</Nav.Link>
        <Nav.Link href="/category/tablet">Tablets</Nav.Link>
        <Nav.Link href="/category/notebook">Notebooks</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    <Navbar.Brand href="/">
    <CarWidget/>
    </Navbar.Brand>
  </Container>
</Navbar>
</>
  );
}

export default NavBar;
