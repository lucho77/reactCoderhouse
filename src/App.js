import './App.css';
import NavBar from './components/NavBar';
import ItemListConteiner from './components/ItemListConteiner';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProviderCart } from './context/CartContext';
import Cart from './components/Cart';
import { useState } from 'react';

function App() {
  const [carts,setCarts] = useState([]); 
  const addCart = (item)=>{

    console.log('seteando al carrito');
    console.log(item);
    let encontrado = false;
    carts.forEach(element => {
      if(element.id === item.id){
        element.cantidad +=item.cantidad;
        encontrado = true;
      }

    });
    if(!encontrado){
      setCarts([...carts,item]);        

    }
    console.log(carts);
}
const getTotal = ()=>{
  let acu = 0;
  carts.forEach(element => {
    acu+=element.cantidad;
  });
  return acu;
}

  return (
    <div className="App">
      <ProviderCart value={{carts,addCart,getTotal}}>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<ItemListConteiner name='E-Commerce'/>}/>
      <Route path="/category/:category" element={<ItemListConteiner name='Productos filtrados por categoria'/>}/>
      <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="*" element={<h1>PAGE NOT FOUND</h1> }/>
      </Routes>
      </BrowserRouter>
      </ProviderCart>
    </div>
  );
}

export default App;
