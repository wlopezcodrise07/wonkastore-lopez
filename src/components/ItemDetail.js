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
                /><br/>
                <h3>{name} - {idproduct}</h3>
                <h3>Precio : {price} USD</h3>
                
                <ItemCount stock={stock} inicial={1} product={idproduct}/>
                </center>
            </div>
        </div>
        
        )
}
  export default ItemDetail