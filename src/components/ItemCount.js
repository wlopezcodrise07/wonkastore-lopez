import React, { useState } from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import car from '../img/car.png';

const ItemCount = ({onAdd,stock,inicial,key}) =>{
  const [count,setCount] = useState(0);


  const cambiarValor = (valor) =>{
    if((count!=stock && valor==1 ) || (count!=inicial && valor==-1)){      
    setCount(count + valor);
    }
  }

    return (
            <> 
            <h4  className="stock">Stock del Producto : {stock} UND</h4>              
            <button className="btn btn-dark" onClick={()=>cambiarValor(-1)}>-</button> 
            <label style={{textAlign: "center",width:"100px",fontWeight:"bold"}}>{count} </label>
            <button className="btn btn-dark" onClick={()=>cambiarValor(1)}>+</button> <br/><br/>
           <button className="btn btn-dark" onClick={()=>onAdd(count)}><img src={car} width="30px" key={key} /> <span>Add</span> </button>
  
            </>
              
        )
}
  export default ItemCount