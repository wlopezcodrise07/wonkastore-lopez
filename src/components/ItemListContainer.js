import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './ItemList';
import ItemDetailContainer from './ItemDetailContainer';
import Item from './Item';
const ItemListContainer = () =>{
        const [detallePostre,setDetallePostre] = useState(null);
        const verDetalle = (id) =>{
            setDetallePostre(id);
            console.log(id)
        }
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
        <div class="row">
            <div className="col-3">
                <ItemList verDetalle={verDetalle}/>

            </div>
            <div className="col-9">
                <ItemDetailContainer idpostre={detallePostre}/>
            </div>
        </div>
        </>
        )
}
  export default ItemListContainer