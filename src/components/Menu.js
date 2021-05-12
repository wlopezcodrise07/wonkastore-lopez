import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
class Menu extends React.Component{
    render(){
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
        return (

        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Wonka's</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#about">¿Quienes Somos?</Nav.Link>              
                    <NavDropdown title="Productos" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Postres</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Comidas</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">Bebidas</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#contacts">Contacto</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
                <Welcome name="William"/>
        </Navbar>
        )
    }
}
  export default Menu