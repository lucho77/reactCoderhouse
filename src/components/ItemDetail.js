import { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ContextCart from '../context/CartContext';
import ItemCount from './itemCount';

const  ItemDetail = ({product}) =>{
      console.log('product');
      console.log(product);
      const [productInCart,setProductInCart]= useState(false);

      const {addProduct,getCantidadByProd} = useContext(ContextCart)
//      console.log(addCart);
      //const [cantidad,setCantidad]=useState(0);
      let totalProd = getCantidadByProd(product?.id);
      if(totalProd ==undefined){
        totalProd=0;
      }
      const onAdd  = (cant)=>{
        console.log('cantidad');
        console.log(cant);
        const productObj = {
          ... product, cantidad: cant
        }
        addProduct(productObj);
        setProductInCart(true);
    }
    return (
      <div className="col-xs-12 col-sm-8 offset-sm-2">
            <p>Detalle del Producto</p>
        <Card>
                <picture>
                    <img src ={ product?.img } width="200" height="200"  />
                </picture>
          <Card.Body>
            <Card.Title>{product?.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{product?.category}</Card.Subtitle>
            <Card.Text>
            {product?.desc} -${product?.price} 
            </Card.Text>
            {productInCart && <Link to={'/cart'}><Button variant="outline-primary" id="button-addon1">
            terminar compra </Button></Link>}
        

            {product?.stock > totalProd ? <ItemCount inicial={getCantidadByProd(product?.id)} stock={product?.stock} onAdd={onAdd}/>:<div>Sin Stock </div>}
            <br/>

            <Link to={'/'}>Volver</Link>

          </Card.Body>
        </Card> 
        </div>
    )
}
export default ItemDetail;
