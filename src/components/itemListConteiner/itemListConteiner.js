
import ItemCount from '../ItemCount/ItemCount';
import './itemListContainer.css'

const ItemListContainer = ({greetings})=>{
    
    return(
        <div className='contenedor-item'>
            <h2 className='item'>{greetings}</h2> 
            <ItemCount initial={1} stock={5} onAdd={(count)=>alert(`Se han agregado ${count} productos al carrito`)} />   
        </div>
    )
}

export default ItemListContainer;