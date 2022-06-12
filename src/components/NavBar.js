import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CarWidget from './CarWidget';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'
import { useContext, useState } from 'react';
import ContextCart from "../context/CartContext";

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const {cart} = useContext(ContextCart)

  return (
      <>

  <Navbar className='navBar' expanded={expanded}   variant="dark" sticky='top' expand="lg" bg="dark">
  <Container className='containerNav'>

    <Navbar.Brand> 
      <Link to='/' className='logo'>
      <h3>Ecommerce</h3>
  </Link>
    </Navbar.Brand>
    <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav"/>

    <Navbar.Collapse id="basic-navbar-nav" className='right-aligned'>
      <Nav className="nav">
        <NavLink className='enlaces'  to="/category/phone">Celulares</NavLink>
        <NavLink className='enlaces'  to="/category/tablet">Tablets</NavLink>
        <NavLink className='enlaces'  to="/category/notebook">Notebooks</NavLink>
      </Nav>
    </Navbar.Collapse>
    {cart.length >0? <CarWidget/>:0}
    </Container>

</Navbar>
</>
  );
}

export default NavBar;
