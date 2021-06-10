import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
import  '../css/styles.css';
import {useCart} from "../contexts/CartContext";
const ItemDetail = ({idproduct,name,price,img,detail,stock,type}) =>{
    
    const cart = useCart();
  
    const [cant,setCant] = useState(0);
    const onAdd = (cantidad) =>{
        setCant(cantidad);
        console.log(`Agregar al carrito el producto: ${name} con cantidad: ${cantidad}`)
    }
    const addNewItem = (cant) =>{
    cart.addItem({idproduct:idproduct,name:name,price:price,img:img,cant:cant})
    }


       return(
        <>
        <div className="row">
            <div className="col-1"></div>
            <div className="col-3">
            <br/><br/>
            <Link to={"/category/"+type} className="btn btn-dark">Back</Link>

            </div>
        </div>
        <div className="row">
            <div className="col-6"> 
            <br/><br/>
                <center>
                <img 
                className="change_height"
                src={img}
                width="500px"    
                height="500px" 
                /><br/>
                </center>
            </div>
            <div className="col-4">
            <br/><br/>
            <center>
            <span>
                <h3>{name}</h3>
                <h3>Precio : {price} USD</h3></span>
                <p>{detail}</p>
                
                {stock>0
                    ? 
                    (cant<=0?
                    <ItemCount onAdd={onAdd} stock={stock} inicial={0} product={idproduct}/>
                    :
                  <button  onClick={()=>addNewItem(cant)} className="btn btn-success">Terminar Compra de {cant} unidades</button>
                    )
                    :
                    <h4 style={{color:'red',fontWeight:'bold',fontStyle:'italic'}}>No hay Stock :c</h4>    
                }
                </center>
            </div>
        </div>
        </>
       )
}
  export default ItemDetail