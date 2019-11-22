import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Historial.css';

class Historial extends React.Component {
    constructor (props){
        super(props) 
            this.state={
                historial1:[
                    "Candelaria, Camp." , 
                    "13-11-2019"
                    
                ],
  
                historial2: [
                    "Hopelchén, Camp.",
                     "8-11-2019"
                   
                    
              ],
              historial3: [
                    "Carmen, Camp.",
                    "4-11-2019"
                    

              ]  
        }
    }
    render (){
        return(
            <div className="container-historial">
                <div className="contenedor-buscador">
                    <input type="search" placeholder="Search" className="buscador"></input>
                </div>    

                <div className="Selec-historial">
                    <select name="Direccion" className="btn" id="boton-selec">
                        <option value="value2" selected>UBICACIÓN</option>
                        <option value="value1">5%</option> 
                        <option value="value3">20%</option>
                    </select>

                    <select name="Fecha" className="btn" id="boton-selec">
                        <option value="value2" selected>FECHA</option>
                        <option value="value1">Más reciente</option> 
                        <option value="value3">Más antiguo</option>
                    </select>
                </div>

                {/* <h1>HISTORIAL</h1> */}

                <Link to="/Historial1">
                    <div class="historial-links">
                        {this.state.historial1.map (historial1 => <p>{historial1}</p>)}  
                    </div>
                </Link>        

                <Link to="/Historial2">                
                    <div  class="historial-links">
                    {this.state.historial2.map (historial2 => <p>{historial2}</p>)}   
                    </div>
                </Link>
                    
                <Link to="/Historial3">
                    <div  class="historial-links">
                       {this.state.historial3.map (historial3 => <p>{historial3}</p>)}    
                    </div>
                </Link>

            </div>
        );
    }
}
export default Historial;