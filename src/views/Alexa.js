import React from 'react';
import Toggle from '../components/toggle';
import '../styles/Alexa.css';

class ServicioVoz extends React.Component{
render () {
    return(

        <div className="container"> 
            {/* <h1>Alexa</h1> */}
            <p>En Voltio Station, pensamos siempre en ti. Por ello te traemos a Alexa 
                el asistente virtual que quiere hacerte la vida más fácil.</p>

                <p>Ahora es tan fácil como ir manejando y decir: Alexa,  ¿cuál es el cargador 
                más cercano? Para que Alexa con ayuda de nosotros te indique la dirección. </p>
                
            <div className="Alexa-toggle">
                <p>Activar Alexa</p>
                <Toggle />
            </div>    
           
         </div>
    );
}
}
export default ServicioVoz;