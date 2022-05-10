import { useState } from 'react'
import './itemCount.css'


function ItemCount({initial ,stock ,onAdd}){

    const [count, setCount] = useState(initial)

    function aumentar(){
        if(count < stock){
            setCount(count + 1)
        }
    }

    function disminuir(){
        if(count > initial){
            setCount(count - 1)
        }
    }

    function añadirCarrito(){
        onAdd(count)
    }

    return(
        <div className='itemCount'>
            <button onClick={aumentar}>+</button>
            <p>{count}</p>
            <button onClick={disminuir}>-</button>
            <button className='agregar' onClick={añadirCarrito}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount