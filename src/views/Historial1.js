import React from 'react';
import '../styles/Seccioneshistorial.css';


class Historial1 extends React.Component {
    constructor (props){
        super(props) 
            this.state={
                historial1:[
                    "Fecha:13-11-2019",
                    "Dirección:Calle 18 20-49, Centro, 24330 Candelaria, Camp.",  
                    "Cargador:DC 35 kW",
                    "Tiempo de carga: 45 minutos",
                    "Costo:$25",
                    "Pago: $1,125"
                ],
  
                historial2: [
                    "Fecha:8-11-2019",
                    "Dirección:Calle 20, Centro, Hopelchén, Camp.", 
                    "Cargador:DC 35 kW", 
                    "Tiempo de carga:45 minutos",
                    "Costo:$35",
                    "Pago:$1,575"
              ],
              historial3: [
                    "Fecha:4-11-2019",
                    "Dirección:Calle 22 91, Centro, 24100 Cd del Carmen, Camp.",  
                    "Cargador:DC 35 kW",
                    "Tiempo de carga:30 minutos",
                    "Costo:$35",
                    "Pago:$1,050 "
              ]  
        }
    }
    render (){
        return(
            <div className="container-SeccionesHistorial">
                <h4>Tesla S.A.</h4>
                <div>   
                {this.state.historial1.map (historial1 => <p>{historial1}</p>)}    
                </div>
    


            </div>
        );
    }
}
export default Historial1;