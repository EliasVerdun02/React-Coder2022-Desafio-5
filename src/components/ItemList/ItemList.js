import { useEffect, useState } from "react"
import Item from "../Item.js/Item"
import './itemList.css'
import productos from "../Productos/productos"



    
    


function ItemList (){

    const [load, setLoad] = useState(true)
    const [products, setProducts] = useState([])

    const ObtenerProductos = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(productos);
        }, 2000);
      });
    

    useEffect(()=>{
    ObtenerProductos
    .then(res=> setProducts(res))
    .catch(err => console.log(err))
    .finally(()=> setLoad(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    
    return(
        <div className="container-product">
            {
            load ?
            <h1>Cargando...</h1>
            :
            products.map((product)=>{
                return(
                    <div key={product.id}>
                        <Item
                           title={product.title}
                           price={product.precio}
                           imgUrl={product.img}
                           stock={product.stock}
                        />
                    </div>
                )
            })
            }
        </div>
    )
}

export default ItemList