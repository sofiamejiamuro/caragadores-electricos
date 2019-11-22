import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Navigation extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Nuestra App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#tipo-de-enchufe">Tipo de Enchufe</Nav.Link>
            <Nav.Link href="#alarma">Alarma</Nav.Link>
            <Nav.Link href="#ah">Ah</Nav.Link>
            <Nav.Link href="#consulta-de-consumos">Consulta de Consumos</Nav.Link>
            <Nav.Link href="#ayuda">Ayuda</Nav.Link>
            <Nav.Link href="#cerrar-sesión">Cerrar Sesión</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;