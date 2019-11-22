import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import './Navigation.css';
import QR from '../img/Vector.png';
import ajuste from '../img/settings.png';
import cerrar from '../img/close.png';
import reserva from '../img/date.png';
import ayuda from '../img/help-circle.png';
import conexion from '../img/plug.jpg';
import alexa from '../img/amazon-alexa.png';
import alerta from '../img/bell.png';
import historial from '../img/battery-charge.png';

class Navigation extends React.Component {
  render() {
    return (
      <Navbar className="Navbar" collapseOnSelect expand="lg"  >
        <Navbar.Brand className="Brand" href="#home">Logo</Navbar.Brand>
         <div className="QR"><img className="ml-auto" src={QR} alt="Logo"/></div> 
        <Navbar.Toggle className="toggle" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#tipo-de-conexion"><img className="conexion mr-2" src={conexion} alt="conexion"/>Tipo de conexión</Nav.Link>
            <Nav.Link href="#reservas"><img className="reserva mr-2" src={reserva} alt="reserva"/>Reservas</Nav.Link>
            <Nav.Link href="#alexa"><img className="alexa mr-2" src={alexa} alt="alexa"/>Alexa</Nav.Link>
            <Nav.Link href="#alertas"><img className="alerta mr-2" src={alerta} alt="alerta"/>Alertas</Nav.Link>
            <Nav.Link href="#historial"><img className="historia mr-2" src={historial} alt="alerta"/>Historial</Nav.Link>
            <Nav.Link href="#ajustes"><img className="ajuste mr-2" src={ajuste} alt="ajuste"/>Ajuastes</Nav.Link>
            <Nav.Link href="#ayuda"><img className="ayuda mr-2" src={ayuda} alt="ayuda"/> Ayuda</Nav.Link>
            <Nav.Link href="#cerrar secion"><img className="cerrar mr-2" src={cerrar} alt="cerrar"/>Cerrar sesión</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
