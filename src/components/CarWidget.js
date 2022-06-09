import logo from '../cart.svg'; // Tell Webpack this JS file uses this image
import { Badge } from 'react-bootstrap';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ContextCart from '../context/CartContext';
function CarWidget() {
  const {getTotal} = useContext(ContextCart); 

  let navigate = useNavigate();
const cantidad = getTotal();
  const goToCart = ()=>{
    navigate('cart')
}
  return (

      <>
       <img
        src={logo}
        width="30"
        height="30" 
        className="d-inline-block align-top" onClick={goToCart}
        alt="cart logo"></img><Badge bg="secondary">{cantidad}</Badge>
        </>
        );
}

export default CarWidget;
