import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = ({stock,inicial}) =>{
    const [count,setCount] = useState(inicial);
  const cambiarValor = (valor) =>{
    if((count!=stock && valor==1 ) || (count!=inicial && valor==-1)){      
    setCount(count + valor);
    }
  }

    return (
            <div className="col-4"> 
            <h2 cant="7" className="stock">Stock del Producto : 7 UND</h2>
            <br/>               
            <button className="btn btn-dark" onClick={()=>cambiarValor(-1)}>-</button> 
            <label style={{textAlign: "center",width:"100px"}}>{count} </label>
            <button className="btn btn-dark" onClick={()=>cambiarValor(1)}>+</button>
            </div>
              
        )
}
  export default ItemCount