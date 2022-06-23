import { useContext } from "react";
import { Button, Card, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContextCart from "../context/CartContext";
import "./Cart.css";
import * as Icon from 'react-bootstrap-icons';
import { addDoc,collection,getDocs,doc,query,where,writeBatch, documentId } from "firebase/firestore";
import { db } from "../services/firebase/fire";
const  Cart = () =>{
    const {cart,limpiaCarrito,removeItem} = useContext(ContextCart); 
    const efectuarOrden = ()=>{
        const productosSinStock=[];
        const orden = {
            usuario:{
                nombre:'Luciano Orono',
                telefono:'3424074460',
                email:'luoronio@gmail.com',
                ciudad:'santa fe',
                comentario:'esto es un comentario'
            },
            items:cart,
            total:totalCost()
        }

        const ids = cart.map(prod=>prod.id);
        const batch = writeBatch(db);
        const collectionSeeStockRef = collection(db,'products');
        getDocs(query(collectionSeeStockRef,where(documentId(),'in',ids))).then(response=>{
            response.docs.forEach(doc=>{
                console.log('doc');
                console.log(doc);
                const data = doc.data();
                const stock = cart.find(prod=>prod.id === doc.id )?.cantidad
                if(data.stock >= stock){
                    batch.update(doc.ref,{stock:data.stock-stock});
                }else{
                    productosSinStock.push({id:data.id,...data});
                }
            })
        }).then(()=>{
          if(productosSinStock.length===0){
            const collectionRef = collection(db,'ordenes');
            addDoc(collectionRef,orden).then(({id})=>{
                console.log('orden creada '+ id);
                batch.commit();
                limpiaCarrito();
            });
    
          }else{
              console.log('No hay stock del producto');
          }  
        })

    }    
    const totalCost = ()=>{
        let tot=0;
        cart.forEach(element => {
            tot +=element.cantidad * element.price;
        });
        return tot;
    }

    console.log('vista cart') 
    console.log(cart) 
    return (
        <div>
            <h1>Carrito</h1>
            <div>
            {cart.length >0? <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Descripcion</th>
                        <th>Precio X Uni</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((cart) => (
                    <tr key={cart.id}>
                        <td>{cart.id}</td>
                        <td>{cart.name}</td>
                        <td>{cart.price}</td>
                        <td>{cart.cantidad}</td>
                        <td>{cart.cantidad * cart.price }</td>
                        <td>
                            <Icon.Eraser color="red" onClick={()=>removeItem(cart.id)}/>
                        </td>
                    </tr>
          ))}
        </tbody>
      </Table>:<div>No hay Elementos en el carrito</div>}

      <Card>
  <Card.Header>Total $ {totalCost()}</Card.Header>
  <Card.Body>
    {cart.length>0 && <Button variant="primary" onClick={()=> efectuarOrden()}>Efectuar compra</Button>}
    {cart.length>0 && <Button variant="secondary" onClick={()=> limpiaCarrito()}>Limpiar Carrito</Button>}
      <Link to={'/'}><Button variant="secondary">Volver</Button></Link>
  </Card.Body>
</Card>


                

            </div>
        </div>    
    )
}
export default Cart;
