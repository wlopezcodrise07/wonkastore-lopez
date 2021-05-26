import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';

const ItemDetail = ({idproduct,name,price,img,detail,stock}) =>{
    
    
    return (
        <div className="row">
            <div className="col-12"> 
                <center>
                <img 
                src={img}
                width="100px"    
                height="100px" 
                /><br/><span>
                <h3>{name}</h3>
                <h3>Precio : {price} USD</h3></span>
                {stock>0
                    ? 
                    <ItemCount stock={stock} inicial={1} product={idproduct}/>
                    :
                    <h4 style={{color:'red',fontWeight:'bold',fontStyle:'italic'}}>No hay Stock :c</h4>    
                }
                </center>
            </div>
        </div>
        
        )
}
  export default ItemDetail