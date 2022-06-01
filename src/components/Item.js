import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const  Item = ({product}) =>{
    
    return (

        <div>
            <Card>
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{product.category}</Card.Subtitle>
            <Card.Text>
                ${product.price} 
            </Card.Text>
            <Link to={`/detail/${product.id}`}>Ver Detalle</Link>
          </Card.Body>
        </Card> 
        </div>
    )
}
export default Item;
