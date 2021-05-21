import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';

const Item = ({key,name,price,img}) =>{


    return (
                        <div className="col-3"> 
                <center>
                <img 
                src={img}
                width="100px"    
                height="100px" 
                /><br/>
                <h3>{name}</h3>
                <h3>Precio : {price} USD</h3>
                <ItemCount stock={7} inicial={1} product={key}/>
                </center>
            </div>
        )
}
  export default Item