import ItemCount from "./itemCount";
function ItemListConteiner(props) {
  console.log(props);
    return (
      <>
    <p> Texto de Prueba ItemListContainer {props.name}</p>
    <ItemCount inicial="1" stock="5"/>     

    </>
    );

}

export default ItemListConteiner;