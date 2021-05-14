import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
class Contenido extends React.Component{
    render(){
        const ItemListContainer = ({name}) =>{
            return (
                <div>
                    <h1>Bienvenido a {name}</h1>
                </div>   
            )
        }
        return (
            <>
            <br/><br/>
            <center><ItemListContainer name="Wonka's Store" /></center>
            </>
        )
    }
}
  export default Contenido