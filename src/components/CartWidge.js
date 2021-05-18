import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import car from '../img/car.png';
const CartWidge = () =>{
    return (

        <Nav.Link  href="#shop"><img src={car} width="30px"/> </Nav.Link> 
        )
}
  export default CartWidge