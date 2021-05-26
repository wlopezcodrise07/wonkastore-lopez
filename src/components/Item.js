import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
import ItemDetail from './ItemDetail'
const Item = ({idproduct,name,price,img,verDetalle}) =>{



    return (
        <div className="row">
            <div className="col-12"> 
                <center>
                <h3>{name}</h3>
                <h3>Precio : {price} USD</h3>
                <button className="btn btn-info detail"   onClick={()=>verDetalle(idproduct)}>Detail</button>
                </center>
            </div>
        </div>
        
        )
}
  export default Item