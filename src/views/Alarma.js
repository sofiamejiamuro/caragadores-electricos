import React from 'react';



class Alarma extends React.Component {
  constructor (props){
      super(props) 
          this.state={
              configuraciones:[
                  "Tiempo",
                  "Porcentaje",  
              ],

            boton: [
                "Servicio de voz",
                "Sonido"
            ]
          
      }
  }
        
    render (){
    
        return(
            <div className="container">
                
            <h1>ALARMA</h1>
            <div>
                <p>Tiempo   

                <select name="Tiempo" className="btn btn-primary">
                    <option value="value1">30 min</option> 
                    <option value="value2" selected>45 min</option>
                    <option value="value3">1 hr</option>
                </select>

                </p>
            
            </div>

            <div>
                <p>Porcentaje
                <select name="Porcentaje" className="btn btn-primary">
                    <option value="value1">5%</option> 
                    <option value="value2" selected>10%</option>
                    <option value="value3">20%</option>
                </select>
                </p>
             </div>   

             <p>
            {this.state.boton.map (boton => <p>{boton}</p>)}   
            </p>
             
            </div>
        );
    }
}
export default Alarma;