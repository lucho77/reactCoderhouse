import ItemCount from "./itemCount";
function ItemListConteiner(props) {
  const onAdd = (cantidad =>{
    console.log('se agrego al carrito: ' +cantidad);
  })
  console.log(props);
    return (
      <>
    <p> Texto de Prueba ItemListContainer {props.name}</p>
    <ItemCount inicial={1} stock={5} onAdd={onAdd}/>     

    </>
    );

}

export default ItemListConteiner;