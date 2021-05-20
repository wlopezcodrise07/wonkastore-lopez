import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
const ItemListContainer = () =>{
    return (
<center>
        <div><br/><br/>
                    <h1>Bienvenido a Wonka's Store</h1>
                </div>
                
                <br/>
                <ItemCount stock={7} inicial={1}/>
                </center>
        )
}
  export default ItemListContainer