import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import { useState } from 'react';
function ItemCount({inicial,stock,onAdd}) {
    const [count,setCount]= useState(inicial);
    const incrementar = ()=>{
        console.log('incrementar')
        console.log('stock')
        console.log(count)

        if(stock >count){
            setCount(count +1);
        }
        
    }
    const decrementar = ()=>{
        console.log('decrementar');
        console.log('stock')
        console.log(count)
        if(count >1){
            setCount(count -1);
        }
    }
    const agregarCarrito =()=>{
        console.log('onAdd carrito')
        onAdd(count);
    }    
    return (
      <>
    <InputGroup className="mb-3">
        <Button variant="outline-secondary" id="button-addon1" onClick={decrementar} >
        -
        </Button>
    <FormControl
      aria-label="Example text with button addon"
      aria-describedby="basic-addon1" value={count} disabled
    />
        <Button variant="outline-secondary" id="button-addon1" onClick={incrementar}>
            +
        </Button>
  </InputGroup>
  <Button variant="outline-primary" id="button-addon1" onClick={agregarCarrito}>
            agregar al carrito
        </Button>

</>
  );
}

export default ItemCount;
