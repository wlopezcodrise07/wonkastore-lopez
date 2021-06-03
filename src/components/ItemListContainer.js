import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './ItemList';
import Cargando from './Cargando';
const ItemListContainer = () =>{
        const [contenido,setContenido] = useState(
            <Cargando />
        );
        setTimeout(function () {
           setContenido(
            <>              
            <br/>
        <div className="row">
        </div>              
            <br/>              
            <br/>
            <div className="row">
                    <ItemList/>
             </div>
             </>
           );
          }, 2000);
          return(
            contenido
          )
}
  export default ItemListContainer