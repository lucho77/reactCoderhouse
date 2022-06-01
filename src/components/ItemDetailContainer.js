import { getProductsById } from "../mocks/mocksProduct";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const [product,setProduct]= useState();
    const {productId} = useParams();
    useEffect(()=>{
        getProductsById(productId).then(response =>{
          console.log(productId);
          console.log(response);
          setProduct(response);
        }).catch((error) => {
          console.log(error)
        });
    },[])
  
      return (
        <>
      <ItemDetail product={product}/>     
      </>
      );
  
  }
  
  export default ItemDetailContainer;