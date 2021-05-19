import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = () =>{
    const [count,setCount] = useState(0);
  function Sumar(){
    let stock = document.getElementsByClassName("stock")[0];
    let cantidad_limite = parseInt(stock.getAttribute("cant"));
    if(cantidad_limite>count){
        
    setCount(count + 1);
    }
  }
  function Restar(){
      if(count>0){
          
    setCount(count - 1);
      }
  }
    return (
            <div className="col-4"> 
            <h2 cant="7" className="stock">Stock del Producto : 7 UND</h2>
            <br/>               
            <button className="btn btn-dark" onClick={Restar}>-</button> 
            <label style={{textAlign: "center",width:"100px"}}>{count} </label>
            <button className="btn btn-dark" onClick={Sumar}>+</button>
            </div>
              
        )
}
  export default ItemCount