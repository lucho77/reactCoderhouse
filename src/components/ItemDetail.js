import { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ContextCart from '../context/CartContext';
import ItemCount from './itemCount';

const  ItemDetail = ({product,title}) =>{
      console.log('product');
      console.log(product);
      const {addCart} = useContext(ContextCart)
//      console.log(addCart);
      const [cantidad,setCantidad]=useState(0);
      const onAdd  = (cant)=>{
      console.log('cantidad');
      console.log(cant);
      setCantidad(cant);
      product.cantidad = cant;
      addCart(product);
    }
    return (
      <div className="col-xs-12 col-sm-8 offset-sm-2">
            <p>Detalle del Producto</p>
        <Card>
          <Card.Body>
            <Card.Title>{product?.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{product?.category}</Card.Subtitle>
            <Card.Text>
            {product?.desc} -${product?.price} 
            </Card.Text>
            {cantidad > 0 ? <Link to='/cart'>finalizar compra</Link>:<ItemCount inicial={1} stock={product?.stock} onAdd={onAdd}/>}
            <br/>
            <Link to={'/'}>Volver</Link>

          </Card.Body>
        </Card> 
        </div>
    )
}
export default ItemDetail;
