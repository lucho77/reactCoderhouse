import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListConteiner from './components/ItemListConteiner';
import ItemCount from './components/itemCount';

function App() {
  return (
    <div className="App">
      <NavBar/> 
      <ItemListConteiner name='desafio3'/>   
    </div>
  );
}

export default App;
