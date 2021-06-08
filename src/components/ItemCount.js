import React, { useState } from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import car from '../img/car.png';

const ItemCount = ({stock,inicial,key}) =>{
    const [count,setCount] = useState(inicial);
    const [buttonAdd,setButtonAdd] = useState(
      <button className="btn btn-dark" onClick={()=>handleClick()}><img src={car} width="30px" key={key} /> <span>Add</span> </button>
    );
    const handleClick = () =>{
      if(count>0){
        setButtonAdd(
          <Link to={"/car/"+count} className="btn btn-success">Terminar Compra</Link>
          )
      }

    }
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
            {buttonAdd}
            </>
              
        )
}
  export default ItemCount