import React from 'react';
import Toggle from '../components/toggle';
import '../styles/Notificaciones.css';


class Notificaciones extends React.Component {
    
    render (){
    
        return(
            <div className="container-Noti">
                

            <div className="texto-noti">
                <div className="secciones">
                    <p>Activar notificaciones tiempo.
                        Avisarme minutos antes que se acabe la bateria.</p>
                    
                    <Toggle /> 
                </div>
                <div className="selec-noti">
                    <select name="Tiempo" className="btn" id="selec">
                        <option value="value2" selected>TIEMPO</option>
                        <option value="value1">30 min</option> 
                        <option value="value1">40 min</option> 
                        <option value="value3">1 hr</option>
                        <option value="value3">1.3 hr</option>
                        <option value="value3">2 hr</option>
                    </select>
                </div>
            
            </div>



            <div className="texto-noti">
                <div className="secciones">
                    <p>Activar notificaciones bateria.
                    Avisarme cuando quede cierto porcentaje de la bateria.  </p>

                    <Toggle /> 
                </div>

                <div className="selec-noti">
                    <select name="Porcentaje" className="btn" id="selec">
                           <option value="value2" selected>Porcentaje</option>
                        <option value="value1">30%</option> 
                        <option value="value3">40%</option>
                        <option value="value3">50%</option>
                    </select>
                </div>
             </div>   

            
        </div>  
        );
    }
}
export default Notificaciones;