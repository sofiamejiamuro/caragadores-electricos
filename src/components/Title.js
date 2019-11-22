import React from 'react';
import './Title.css'


const Tittle = ({ color, text }) => {
    return (
        <header style={{ backgroundColor: color }} className="header">
            <h3>{text}</h3>
        </header>
    )
}

export default Tittle;