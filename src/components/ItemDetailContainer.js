import { getProductsById } from "../mocks/mocksProduct";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";

function ItemDetailContainer(props) {
    const [product,setProduct]= useState();
    useEffect(()=>{
        getProductsById(props.id).then(response =>{
            console.log('id');
            console.log(props.id);
            console.log('Response')
            console.log(response)
            console.log('title');
            console.log(props.title);
            
            setProduct(response);
        }).catch((error) => {
          console.log(error)
        });
    },[])
  
      return (
        <>
      <ItemDetail product={product} title={props.title}/>     
      </>
      );
  
  }
  
  export default ItemDetailContainer;