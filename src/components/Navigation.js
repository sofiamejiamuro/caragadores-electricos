import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from 'react-router-dom';

import './Navigation.css'

export default props => {
  return (
    <Menu className = "menu" {...props}>
      <li className="nav-item">
        <Link to="/Cargadores" className="nav-link">
          Tipo de conexión
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/" className="nav-link">
          Reservas
      </Link>
      </li>
      <li className="nav-item">
        <Link to="/Alexa" className="nav-link">
          Alexa
     </Link>
      </li>
      <li className="nav-item">
        <Link to="/Notificaciones" className="nav-link">
          Notificaciones
      </Link>
      </li>
      <li className="nav-item">
        <Link to="/Historial" className="nav-link">
          Historial de Cargas
      </Link>
      </li>
      <li className="nav-item">
        <Link to="/Qr" className="nav-link">
          Lector QR
      </Link>
      </li>
    </Menu>
  );
};
