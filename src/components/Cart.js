import { useContext } from "react";
import { Button, Card, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContextCart from "../context/CartContext";
import "./Cart.css";
import * as Icon from 'react-bootstrap-icons';

const  Cart = () =>{
    const {cart,limpiaCarrito,removeItem} = useContext(ContextCart); 
    
    const totalCost = ()=>{
        let tot=0;
        cart.forEach(element => {
            tot +=element.cantidad * element.price;
        });
        return tot;
    }

    console.log('vista cart') 
    console.log(cart) 
    return (
        <div>
            <h1>Carrito</h1>
            <div>
            {cart.length >0? <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Descripcion</th>
                        <th>Precio X Uni</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((cart) => (
                    <tr key={cart.id}>
                        <td>{cart.id}</td>
                        <td>{cart.name}</td>
                        <td>{cart.price}</td>
                        <td>{cart.cantidad}</td>
                        <td>{cart.cantidad * cart.price }</td>
                        <td>
                            <Icon.Eraser color="red" onClick={()=>removeItem(cart.id)}/>
                        </td>
                    </tr>
          ))}
        </tbody>
      </Table>:<div>No hay Elementos en el carrito</div>}

      <Card>
  <Card.Header>Total $ {totalCost()}</Card.Header>
  <Card.Body>
      {cart.length>0 && <Button variant="primary" onClick={()=> limpiaCarrito()}>Limpiar Carrito</Button>}
      <Link to={'/'}><Button variant="secondary">Volver</Button></Link>
  </Card.Body>
</Card>


                

            </div>
        </div>    
    )
}
export default Cart;
