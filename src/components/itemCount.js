import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
function ItemCount(props) {
    return (
      <>
    <InputGroup className="mb-3">
        <Button variant="outline-secondary" id="button-addon1">
        -
        </Button>
    <FormControl
      aria-label="Example text with button addon"
      aria-describedby="basic-addon1" value={props.inicial} disabled
    />
        <Button variant="outline-secondary" id="button-addon1">
            +
        </Button>
  </InputGroup>
  <Button variant="outline-primary" id="button-addon1">
            agregar al carrito
        </Button>

</>
  );
}

export default ItemCount;
