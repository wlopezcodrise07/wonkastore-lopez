import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './ItemList';
const ItemListContainer = () =>{

    return (
        <>
        <center>
        <div>
            <br/><br/>
             
                    <h1>Bienvenido a Wonka's Store</h1>
        </div>
                
                <br/>
        </center>
        
        
        <br/>
        <ItemList/>
        </>
        )
}
  export default ItemListContainer