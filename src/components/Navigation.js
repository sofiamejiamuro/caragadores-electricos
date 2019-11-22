import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from 'react-router-dom';

import './Navigation.css'

export default props => {
  return (
    // Pass on our props
    <Menu className="menu" {...props}>
      <li className="nav-item">
        <Link to="/" className="nav-link">
          Tipo de conexión
        </Link>
      </li>

      <li className="nav-item">

        <Link to="/mapa" className="nav-link">
          Recervas
      </Link>
      </li>
      <li className="nav-item">

        <Link to="/mapa" className="nav-link">
          Alexa
     </Link>
      </li>
      <li className="nav-item">

        <Link to="/mapa" className="nav-link">
          Notificaciones
      </Link>
      </li>
    </Menu>
  );
};
