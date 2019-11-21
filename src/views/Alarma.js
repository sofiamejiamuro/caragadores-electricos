import React from 'react';



class Alarma extends React.Component {
  constructor (props){
      super(props) 
          this.state={
              configuraciones:[
                  "Tiempo",
                  "Porcentaje",
                  "Servicio de voz",
                  "Sonido",
                  
              ]
          
      }
  }
        
    render (){
    
        return(
            <div className="container">
                
            <h1>ALARMA</h1>

            <ul>
                {this.state.configuraciones.map (configuraciones => <li>{configuraciones}</li>)}
            </ul>
              
            
                
            </div>
        );
    }
}
export default Alarma;