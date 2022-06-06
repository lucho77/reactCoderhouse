import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ItemCount from './itemCount';

const  ItemDetail = ({product,title}) =>{
    console.log('product');
    console.log(product);
    return (
      <div className="col-xs-12 col-sm-8">
            <p>Detalle del Producto</p>
        <Card>
          <Card.Body>
            <Card.Title>{product?.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{product?.category}</Card.Subtitle>
            <Card.Text>
            {product?.desc} -${product?.price} 
            </Card.Text>
            <ItemCount inicial={1} stock={product?.stock}/>
            <Link to={'/'}>Volver</Link>

          </Card.Body>
        </Card> 
        </div>
    )
}
export default ItemDetail;
