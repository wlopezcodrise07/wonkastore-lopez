import {React,useState} from 'react';
import {Link} from "react-router-dom";
import logo_black from '../img/logo_black.png';
import Cargando from './Cargando';
import  '../css/styles.css';

const Home = () =>{
    const [contenido,setContenido] = useState(<Cargando />);
    setTimeout(function () {

        setContenido(
            <div>
            <center>
            <div>
                <br/><br/>             
                <h1>Bienvenido a </h1><img src={logo_black} />
            </div>                
                    <br/>
            </center>  
            <div className="row">
                <div className="col-4">
                    <center>
                    <Link to="/category/polo">
                    <img 
                    className="change_opacity"
                     src="https://http2.mlstatic.com/D_NQ_NP_944890-MPE43841193199_102020-W.jpg" 
                     width="300px" height="300px"
                     />
                     </Link>
                     <br/>
                     <h3>Polos</h3>
                    </center>    
                </div>
                <div className="col-4">
                    <center>
                    <Link to="/category/pique">
                    <img  
                    className="change_opacity"
                    src="https://http2.mlstatic.com/D_NQ_NP_910700-MPE45141844096_032021-O.jpg" 
                    width="300px" height="300px"
                    />
                    </Link>
                    <br/>
                     <h3>Piques</h3>
                    </center>
                </div>
                <div className="col-4">
                    <center>
                    <Link to="/category/polera">
                    <img  
                    className="change_opacity"
                    src="https://http2.mlstatic.com/D_NQ_NP_840377-MPE42257854071_062020-V.jpg" 
                    width="300px" height="300px"
                    />
                    </Link>
                    <br/>
                     <h3>Poleras</h3>
                    </center>
                </div>
            </div>
            </div>
        );
       }, 2000);
    return (
        contenido
    )

}
export default Home;