import React,{useState} from "react";
import {Link} from "react-router-dom";
import logo_black from '../img/logo_black.png';
import Cargando from './Cargando';
const AboutUs = () => {
    const [contenido,setContenido] = useState(
        <Cargando />
    );
    setTimeout(function () {

        setContenido(
            <>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
            <br/>
            <br/>
             <center><h3>¿Quienes Somos?</h3></center>
            <br/>
            <br/>
    
             <p style={{textAlign: "justify",}}>Wonka's Store es una empresa dedicada a la venta online de ropa. Nuestro objetivo es ofrecer la moda más actual a los mejores precios.
            Tenemos a su disposición una gran variedad de productos, los cuales son renovados cada temporada para dar siempre <b>las prendas más geek del mercado</b>.
            Tenemos un equipo que está dedicado a satisfacer tus necesidades y que te contestará a tus dudas con la mayor brevedad posible. 
            Para una mejor comunicación puedes contactar con nosotros a través de WhatsApp o mensaje privado de Facebook y tan sólo en unos minutos tu duda será resuelta.</p>
            <br/>
            <br/>
            <center><img src={logo_black} /></center>
                                
                            </div>
                        </div>
    
            </>
        );
       }, 2000);
       return(
         contenido
       )
}
export default AboutUs