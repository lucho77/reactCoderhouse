
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getDoc, doc}from "firebase/firestore"
import {db} from "../services/firebase/fire"

function ItemDetailContainer() {
    const [product,setProduct]= useState();
    const {productId} = useParams();
    useEffect(()=>{

      getDoc(doc(db,'products',productId)).then(response =>
        
        {
          console.log('exito');
          const producto = {id:response.id, ...response.data()}
      
        setProduct(producto);
      }).catch(error =>
        {'error al consultar productos'}
      );
    
    },[])
  
      return (
        <>
      <ItemDetail product={product}/>     
      </>
      );
  
  }
  
  export default ItemDetailContainer;