import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../css/styles.css';
import Cargando from './Cargando';
import {useCart} from "../contexts/CartContext";
const Cart = () =>{
    const [detalle, setDetalle] = useState(null);

    const cart = useCart();
    useEffect(() => {
        let promise = new Promise((resolve, reject) => {
          setTimeout(function () {
            resolve(cart); 
          }, 500);
        });
        cart ? promise.then(result => {
    console.log(cart)
    setDetalle(result.cart.items);
        })
        : promise.then(result => {
        })
      })



       return(
        < > 

        {
            detalle?
        detalle.length>0
        ?
        < > 
        <br/>
        <br/>
        <div className="row">
            <div className="col-12">
                <div className="float-right">
                    <button className="btn btn-warning" onClick={cart.clear}>Limpiar</button>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <br/>
                <br/>

                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>IDPRODUCTO</th>
                                <th>PRODUCTO</th>
                                <th>CANTIDAD</th>
                                <th>PRECIO</th>
                                <th>TOTAL</th>
                                <th>VISUALIZACIÓN</th>
                                <th>ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                        {detalle?.map((x) => (
                        <tr>
                            <td>{x.idproduct}</td>
                            <td>{x.name}</td>
                            <td>{x.cant}</td>
                            <td>{x.price}</td>
                            <td>{parseFloat(x.cant*x.price)}</td>
                            <td><img src={x.img} width="50px" height="50px" /></td>
                            <td><button className="btn btn-danger" onClick={()=>cart.removeItem(x.idproduct)}>Eliminar</button></td>
                        </tr>
                        ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>

        :
        <div className="row">
            <div className="col-12">
                <br/>
                <br/>
                <br/>
                <center>
                    <p>Tu carrito de compras se encuentra vacio, visita nuestros productos :) !!!
                        <Link to={"/"}>Click aquí</Link>
                    </p>
                </center>
            </div>
        </div>
        :
        <><Cargando/></>
        }
        </>
       )
}
  export default Cart