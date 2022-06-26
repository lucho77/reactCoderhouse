import './App.css';
import NavBar from './components/NavBar';
import ItemListConteiner from './components/ItemListConteiner';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContextProvider, ProviderCart } from './context/CartContext';
import Cart from './components/Cart';
import { useState } from 'react';
import FormCrud from './components/formulario';
import FormExample from './components/formulario';

function App() {

  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<ItemListConteiner name='E-Commerce'/>}/>
      <Route path="/category/:category" element={<ItemListConteiner name='Productos filtrados por categoria'/>}/>
      <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/orden" element={<FormExample/>}/>
      <Route path="*" element={<h1>PAGE NOT FOUND</h1> }/>
      </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
