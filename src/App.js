import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListConteiner from './components/ItemListConteiner';
import ItemCount from './components/itemCount';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar/> 
      <ItemListConteiner name='desafio'/>   
      <ItemDetailContainer id={1} title={"Detalle Item"}/>
    </div>
  );
}

export default App;
