import { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ContextCart from '../context/CartContext';
import ItemCount from './itemCount';

const  ItemDetail = ({product}) =>{
      console.log('product');
      console.log(product);
      const {addProduct,getCantidadByProd} = useContext(ContextCart)
//      console.log(addCart);
      //const [cantidad,setCantidad]=useState(0);
      const onAdd  = (cant)=>{
        console.log('cantidad');
        console.log(cant);
        const productObj = {
          ... product, cantidad: cant
        }
        addProduct(productObj);
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
            {product?.stock > 0 ? <ItemCount inicial={getCantidadByProd(product?.id)} stock={product?.stock} onAdd={onAdd}/>:<div>Sin Stock </div>}
            <br/>

            <Link to={'/'}>Volver</Link>

          </Card.Body>
        </Card> 
        </div>
    )
}
export default ItemDetail;
