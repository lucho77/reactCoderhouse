import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import {getProducts, getProductsByCategory} from "../mocks/mocksProduct"
import { useParams } from "react-router-dom";
function ItemListConteiner(props) {
  const [products,setProducts]= useState([]);
  const {category}= useParams();
  useEffect(()=>{
    if(!category){
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
  
      }
    },[]);


     

  const onAdd = (cantidad =>{
    console.log('se agrego al carrito: ' +cantidad);
  })
  console.log(props);
    return (
      <>
    <p>{props.name}</p>
     <ItemList products={products}/> 
    </>
    );

}

export default ItemListConteiner;