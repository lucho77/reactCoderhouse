import './App.css';
import NavBar from './components/NavBar';
import ItemListConteiner from './components/ItemListConteiner';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<ItemListConteiner name='E-Commerce'/>}/>
      <Route path="/category/:category" element={<ItemListConteiner name='Productos filtrados por categoria'/>}/>
      <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
      <Route path="/cart" element={<h1>CART</h1> }/>
      <Route path="*" element={<h1>PAGE NOT FOUND</h1> }/>
      </Routes>
      </BrowserRouter>
       {/*<ItemDetailContainer id={1} title={"Detalle Item"}/>*/}
    </div>
  );
}

export default App;
