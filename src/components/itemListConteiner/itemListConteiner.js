
import ItemList from '../ItemList/ItemList';
import './itemListContainer.css'


const ItemListContainer = ({greetings})=>{  

    return(
        <div className='contenedor-item'>
            <h2 className='item'>{greetings}</h2> 
              
            <ItemList/>
        </div>
    )
}

export default ItemListContainer;