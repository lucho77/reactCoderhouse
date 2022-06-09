import { useContext } from "react";
import { Link } from "react-router-dom";
import ContextCart from "../context/CartContext";

const  Cart = () =>{
    const {carts} = useContext(ContextCart); 
    console.log('vista cart') 
    console.log(carts) 
    return (
        <div>
            <h1>Cart</h1>
            <div>
                {carts.map(c => <div key={c.id}>{c.name} Cantidad:{c.cantidad} </div> )}
        <br/>
                <Link to={'/'}>Volver</Link>

            </div>
        </div>    
    )
}
export default Cart;
