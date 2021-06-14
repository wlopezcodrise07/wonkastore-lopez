import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
import  '../css/styles.css';
import {useCart} from "../contexts/CartContext";
const ItemDetail = ({idproduct,name,price,img,detail,stock,type}) =>{
    
    const cart = useCart();
  
    const [cant,setCant] = useState(0);

    const addNewItem = (cant) =>{
        setCant(cant);
    cart.addItem({idproduct:idproduct,name:name,price:price,img:img,cant:cant})
    console.log(`Agregar al carrito el producto: ${name} con cantidad: ${cant}`)

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
                    <ItemCount onAdd={addNewItem} stock={stock} inicial={0} product={idproduct}/>
                    :
                  <Link to="/car"  className="btn btn-success">Terminar Compra de {cant} unidades</Link>
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