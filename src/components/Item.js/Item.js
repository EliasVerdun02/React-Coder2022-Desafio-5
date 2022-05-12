import ItemCount from "../ItemCount/ItemCount"
import './Item.css'



function Item({id,title,price,imgUrl,stock}){

    return(
        <div className="product">
            <div className="container-img">
              <img src={imgUrl} />
            </div>
            <div className="container-info">
              <p className="title-product">{title}</p>
              <p>{price}</p>
            </div>
            <ItemCount initial={1} stock={stock} onAdd={(count)=>alert(`Se han agregado ${count} productos al carrito`)} /> 
        </div>
    )
}

export default Item