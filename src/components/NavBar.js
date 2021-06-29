import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import CartWidge from './CartWidge';
import logo from '../img/logo.png';
const Welcome = ({name}) =>{
    return (
        <Nav>
            <NavDropdown title={"Bienvenido "+name} id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action4">Settings</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Logout</NavDropdown.Item>
            </NavDropdown>
        </Nav>

    )
}
const NavBar = () =>{
    return (
        <div className="row">
            <div className="col-md-12">
            <Navbar className="navbar navbar-expand-lg" bg="dark" variant="dark">
                <Navbar.Brand href="/"><img src={logo} width="100px"/></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Link to="/home" className="nav-link">Inicio</Link>
                        <Link to="/aboutus" className="nav-link">¿Quienes Somos?</Link>              
                        <NavDropdown title="Productos" id="navbarScrollingDropdown">
                            <Link to="/category/polo" className="dropdown-item">Polos</Link>
                            <Link to="/category/pique" className="dropdown-item">Piques</Link>
                            <NavDropdown.Divider />
                            <Link to="/category/polera" className="dropdown-item">Poleras</Link>
                        </NavDropdown>
                        <Nav.Link href="#contacts">Contacto</Nav.Link>
                    </Nav>
                    <CartWidge />
                    <Welcome name="William" />
            </Navbar> 

            </div>
        </div>
        )
}

  export default NavBar