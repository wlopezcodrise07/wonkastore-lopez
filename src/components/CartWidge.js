import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import car from '../img/car.png';
import {useCart} from "../contexts/CartContext";
const CartWidge = () =>{
const cart = useCart();

    return (
      parseInt(cart.cart.quantity)>0?
        <Link  to="/car"><img src={car} width="30px"/> <span class="badge badge-light">{parseInt(cart.cart.quantity)}</span></Link> 
      :
      <></>
        )
}
  export default CartWidge