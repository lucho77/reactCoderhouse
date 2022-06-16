import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import {getProducts, getProductsByCategory} from "../mocks/mocksProduct"
import { useParams } from "react-router-dom";
import {getDocs, collection,query,where}from "firebase/firestore"
import {db} from "../services/firebase/fire"
function ItemListConteiner(props) {
  const [products,setProducts]= useState([]);
  const {category}= useParams();
  useEffect(()=>{
    const collectionRef = category
    ? query(collection(db, 'products'), where('category', '==', category))
    : collection(db, 'products')
    
    getDocs(collectionRef).then(response =>
        
        {
          console.log('exito');
          const productos = response.docs.map(doc => {
          return {id:doc.id, ...doc.data()}
        })
        setProducts(productos);
      }).catch(error =>
        {'error al consultar productos'}
      );
      /*
      getProducts().then(response =>{
        setProducts(response);
      }).catch((error) => {
        console.log(error)
      });
      }else{
        getProductsByCategory(category).then(response =>{
          console.log('getProductsByCategory');
          console.log(response);
          setProducts(response);
        }).catch((error) => {
          console.log(error)
        });
  */
   
      
    },[category]);


  console.log(props);
    return (
      <>
    <p className= "col-xs-12 col-sm-8 offset-sm-2">{props.name}</p>
     <ItemList products={products}/> 
    </>
    );

}

export default ItemListConteiner;