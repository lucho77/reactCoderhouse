import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const  Item = ({product}) =>{
    
    return (

        <div className= "col-xs-12 col-sm-8 offset-sm-2">
            <Card>             
            <Card.Header>{product.name}</Card.Header>

          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">{product.category}</Card.Subtitle>
            <Card.Text>
                ${product.price} 
            </Card.Text>
            <Link to={`/detail/${product.id}`}>Ver Detalle</Link>
          </Card.Body>
        </Card> 
        <br/>
        </div>
    )
}
export default Item;
