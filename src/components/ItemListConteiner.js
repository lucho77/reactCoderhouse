import { useEffect, useState } from "react";
import ItemCount from "./itemCount";
import ItemList from "./ItemList";
import getProducts from "../mocks/mocksProduct"
function ItemListConteiner(props) {
  const [products,setProducts]= useState([]);
  useEffect(()=>{
      getProducts().then(response =>{
          setProducts(response);
      })
  },[])

  const onAdd = (cantidad =>{
    console.log('se agrego al carrito: ' +cantidad);
  })
  console.log(props);
    return (
      <>
    <p> Texto de Prueba ItemListContainer {props.name}</p>
    <ItemCount inicial={1} stock={5} onAdd={onAdd}/>     
     <ItemList products={products}/> 
    </>
    );

}

export default ItemListConteiner;