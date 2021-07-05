import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../css/styles.css';
import Cargando from './Cargando';
import {useCart} from "../contexts/CartContext";
import { Modal } from 'react-bootstrap';
const Cart = () =>{
    const [detalle, setDetalle] = useState(null);
    const [show, setShow] = useState(false);
    const [nameBuyer, setNameBuyer] =useState('');
    const [lastNameBuyer, setLastNameBuyer] =useState('');
    const [phoneBuyer, setPhoneBuyer] =useState('');
    const [emailBuyer, setEmailBuyer] =useState('');
    const [emailConfirmedBuyer, setEmailConfirmedBuyer] =useState('');
    const [messageEmail,setMessageEmail] = useState(false)
    

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleNameBuyer = event => {
        setNameBuyer(event.target.value)
    }
    const handleLastNameBuyer = event => {
        setLastNameBuyer(event.target.value)
    }    
    const handlePhoneBuyer = event => {
        setPhoneBuyer(event.target.value)
    }
    const handleEmailBuyer = event => {
        setEmailBuyer(event.target.value)
        if (emailConfirmedBuyer==event.target.value) {
            setMessageEmail(false)
        }else{
            setMessageEmail(true)
        }
        console.log(messageEmail)
        console.log(emailConfirmedBuyer)
        console.log(emailBuyer)
    }

    const handleEmailConfirmedBuyer = event => {
        setEmailConfirmedBuyer(event.target.value)
        if (emailBuyer==event.target.value) {
            setMessageEmail(false)
        }else{
            setMessageEmail(true)
        }
        console.log(messageEmail)
        console.log(emailConfirmedBuyer)
        console.log(emailBuyer)
    }

    const cart = useCart();
    const generarComprar = () =>{
        const dataBuyer = { name:nameBuyer, lastName: lastNameBuyer,phone: phoneBuyer, email:emailBuyer}
        cart.uploadOrder(dataBuyer)
    }
    useEffect(() => {
    console.log(cart)
    setDetalle(cart.cart.items);

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
            <div className="col-md-12">
                <div className="float-right">
                    <button className="btn btn-warning" onClick={cart.clear}>Limpiar</button>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
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
                            <td>{x.price} USD</td>
                            <td>{parseFloat(x.cant*x.price)} USD</td>
                            <td><center><img src={x.img} width="70px" height="70px" /></center></td>
                            <td><button className="btn btn-danger" onClick={()=>cart.removeItem(x.idproduct)}>Eliminar</button></td>
                        </tr>
                        ))}
                        <tr>
                            <td colSpan={4}><center>TOTAL</center></td>
                            <td colSpan={3}><h3><center>{parseFloat(cart.cart.total)} USD</center></h3></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        <div className="row">
            <div className="col-md-3">

            </div>
            <div className="col-md-6">
                <button className="btn btn-block btn-success" onClick={handleShow}>Generar Orden</button>
            </div>
        </div>
                            
      <Modal
        show={show}
        size="lg"
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Datos del Comprador</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <>
            <div className="row">
                <div className="col-md-12">
                    <p style={{fontSize:'9pt',fontStyle:'italic'}}>*Complete los siguientes campos para completar la compra.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <label>Nombre (*)</label>
                    <input type="text" className="form-control" placeholder="Ingrese su nombre completo..." onChange={handleNameBuyer} value={nameBuyer}/>
                </div>
                <div className="col-md-6">
                    <label>Apellido (*)</label>
                    <input type="text" className="form-control" placeholder="Ingrese sus apellidos completos..." onChange={handleLastNameBuyer}/>
                </div>
            </div>
            <br/>
            <div className="row">            
                <div className="col-md-6">
                    <label>E-mail (*)</label>
                    <input type="email" className="form-control" placeholder="Ingrese su e-mail..." onChange={handleEmailBuyer}/>
                    {
                        messageEmail && <><p style={{fontSize:'9pt',fontStyle:'italic',color:'#FF4444',fontWeight:'bold'}}>No coinciden los correos digitados</p></>
                    }
                </div>
                <div className="col-md-6">
                    <label>Confirmar E-mail (*)</label>
                    <input type="email" className="form-control" placeholder="Ingrese su e-mail..." onChange={handleEmailConfirmedBuyer}/>
                    {
                        messageEmail && <><p style={{fontSize:'9pt',fontStyle:'italic',color:'#FF4444',fontWeight:'bold'}}>No coinciden los correos digitados</p></>
                    }
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-md-6">
                    <label>Telefono (*)</label>
                    <input type="number" className="form-control" placeholder="Ingrese su número de telefono..." onChange={handlePhoneBuyer} maxlength="9"/>
                </div>
            </div>
            </>
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" className="btn btn-seconday" onClick={handleClose}>
            Close
          </button>
         
           { 
           ((nameBuyer.trim()=='' && lastNameBuyer.trim()=='' && phoneBuyer.trim()=='' && emailBuyer.trim()=='' && emailConfirmedBuyer.trim()=='') || (emailBuyer.trim()==emailConfirmedBuyer.trim())) &&  
           <button variant="primary" className="btn btn-seconday" onClick={generarComprar} >Realizar Compra</button>

            }

        </Modal.Footer>
      </Modal>
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