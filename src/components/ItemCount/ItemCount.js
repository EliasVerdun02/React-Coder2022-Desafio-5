import { useState } from 'react'
import './itemCount.css'
import { BsFillCartFill } from 'react-icons/bs'

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
            <div className='container-modificar'>
               <button onClick={aumentar}>+</button>
               <p>{count}</p>
               <button onClick={disminuir}>-</button>
            </div>
            <div className='container-button'>
               <button className='agregar' onClick={añadirCarrito}><BsFillCartFill/></button>
            </div>
        </div>
    )
}

export default ItemCount