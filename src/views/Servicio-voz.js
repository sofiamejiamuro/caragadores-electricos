import React from 'react';
import Toggle from '../components/toggle';

class ServicioVoz extends React.Component{
render () {
    return(

        <div className="container"> 
            <h1>Servicio de voz</h1>
            <p>Aquí ponemos el texto </p>
            <Toggle />
         </div>
    );
}
}
export default ServicioVoz;