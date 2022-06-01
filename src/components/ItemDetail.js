import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const  ItemDetail = ({product,title}) =>{
    console.log('title');
    console.log(title);
    return (

        <div>
            <p>Detalle del Producto</p>
        <Card>
          <Card.Body>
            <Card.Title>{product?.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{product?.category}</Card.Subtitle>
            <Card.Text>
            {product?.desc} -${product?.price} 
            </Card.Text>
            <Link to={'/'}>Volver</Link>

          </Card.Body>
        </Card> 
        </div>
    )
}
export default ItemDetail;
