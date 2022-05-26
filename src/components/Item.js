import Card from 'react-bootstrap/Card';

const  Item = ({product}) =>{
    
    return (

        <div>
            <Card>
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{product.category}</Card.Subtitle>
            <Card.Text>
            {product.desc} -${product.price} 
            </Card.Text>
          </Card.Body>
        </Card> 
        </div>
    )
}
export default Item;
