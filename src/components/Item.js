import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
import ItemDetail from './ItemDetail'
const Item = ({idproduct,name,price,img}) =>{



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
                <ItemCount stock={7} inicial={1} product={idproduct}/>
                <button className="btn btn-info detail"   onClick={()=>verDetalle(idproduct)}>Detail</button>
                </center>
            </div>
        </div>
        
        )
}
  export default Item