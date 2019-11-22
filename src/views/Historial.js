import React from 'react';
import { Link } from 'react-router-dom';

class Historial extends React.Component {
    constructor (props){
        super(props) 
            this.state={
                historial1:[
                    "Fecha:13-11-2019",
                    "Dirección:Calle 18 20-49, Centro, 24330 Candelaria, Camp."  
                ],
  
                historial2: [
                    "Fecha:8-11-2019",
                    "Dirección:Calle 20, Centro, Hopelchén, Camp."
                    
              ],
              historial3: [
                    "Fecha:4-11-2019",
                    "Dirección:Calle 22 91, Centro, 24100 Cd del Carmen, Camp." 

              ]  
        }
    }
    render (){
        return(
            <div className="container">
                <h1>HISTORIAL</h1>
                <Link to="/Historial1">
                    <div>
                        {this.state.historial1.map (historial1 => <p>{historial1}</p>)}  
                    </div>
                </Link>        

                <Link to="/Historial2">                
                    <div>
                    {this.state.historial2.map (historial2 => <p>{historial2}</p>)}   
                    </div>
                </Link>
                    
                <Link to="/Historial3">
                    <div>
                       {this.state.historial3.map (historial3 => <p>{historial3}</p>)}    
                    </div>
                </Link>

            </div>
        );
    }
}
export default Historial;