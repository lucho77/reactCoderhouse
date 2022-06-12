import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import { useState } from 'react';
function ItemCount({inicial=1,stock,onAdd}) {
    console.log("inicial");
    console.log(inicial);
    
   const [count,setCount]= useState(inicial);
   //setCount(4);
    //let count = inicial;
  const incrementar = ()=>{
        console.log('incrementar')
        console.log('stock')
        //console.log(count)

        if(stock >inicial){
           // inicial++;
            setCount(count +1);
        }
        
    }
    const decrementar = ()=>{
        console.log('decrementar');
        console.log('stock')
        //console.log(count)
        if(stock >1){
           //inicial--;
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
