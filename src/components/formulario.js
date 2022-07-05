import { useContext, useState } from "react";
import { Button, Card, Col, Form, InputGroup, Modal, Row } from "react-bootstrap";
import { addDoc,collection,getDocs,doc,query,where,writeBatch, documentId } from "firebase/firestore";
import { db } from "../services/firebase/fire";
import ContextCart from "../context/CartContext";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { useNavigate } from "react-router-dom";

function FormOrden() {
    let navigate = useNavigate();
    
    const {cart,limpiaCarrito,removeItem} = useContext(ContextCart); 
    const [submitted, setSubmitted] = useState(false);
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);
    const [idOrden, setIdOrden] = useState('');

    const [datos, setDatos] = useState({
        nombre:'',
        telefono:'',
        email:'',
        ciudad:'',
        comentario:'',
        })
        const handleInputChange = (event) => {
            // console.log(event.target.name)
            // console.log(event.target.value)
            setDatos({
            ...datos,
            [event.target.name] : event.target.value
            })
            }
            
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
    }else{
          console.log('form correcto');
          console.log(datos);
          event.preventDefault();
          event.stopPropagation();
  
            efectuarOrden(event);
        }
  
    };
  
    const efectuarOrden = (event)=>{
        setSubmitted(true);
        const productosSinStock=[];
        const orden = {
            usuario:{
                ...datos
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
                setIdOrden(id);
                setShow(true);
                limpiaCarrito();
            });
    
          }else{
              console.log('No hay stock del producto');
              NotificationManager.error('No hay Stock disponible: ', 5000);
              setSubmitted(false);
            }  
        }).catch(error=>{
            NotificationManager.error('Se ha producido un error al llamar al intentar generar la orden: ', 5000);
            console.log(error);
            setSubmitted(false);
        })

    }    
    const totalCost = ()=>{
        let tot=0;
        cart.forEach(element => {
            tot +=element.cantidad * element.price;
        });
        return tot;
    }

    const handleClose = () => {
        setShow(false)
        navigate("/", { replace: true });
        
    };


    return (
        <>

        <NotificationContainer/>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Orden Generada</Modal.Title>
        </Modal.Header>
        <Modal.Body>ha generado con exito la orden:  {idOrden}
         <pre>{JSON.stringify(datos)}</pre> 

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            recargar pagina
          </Button>
        </Modal.Footer>
      </Modal>

        <Card className= "col-xs-12 col-sm-8 offset-sm-2">
        <Card.Body>
          <Card.Title>Generar Orden</Card.Title>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              required name="nombre"
              type="text"  onChange={handleInputChange} 

            />
            <Form.Control.Feedback type="invalid">
                                Por favor ingrese un nombre.
              </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required  name="email" onChange={handleInputChange} 

              type="text"
            />
            <Form.Control.Feedback type="invalid">
                                Por favor ingrese un mail.
              </Form.Control.Feedback>

          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              required  name="telefono"  onChange={handleInputChange} 

              type="text"
            />
            <Form.Control.Feedback type="invalid">
                                Por favor ingrese un Telefono.
              </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control
              required name="ciudad"
              type="text" onChange={handleInputChange} 

            />
            <Form.Control.Feedback type="invalid">
                                Por favor ingrese una ciudad.
              </Form.Control.Feedback>

          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>Comentario</Form.Label>
            <Form.Control name="comentario" as="textarea" rows={3}  onChange={handleInputChange} 
   />
          </Form.Group>
        </Row>
        <Button disabled={submitted} type="submit">Generar Orden</Button>
      </Form>

        </Card.Body>
      </Card>
      </>


    );
  }
  
export default FormOrden;