import React from 'react';
import { Button } from 'reactstrap';


class Boton extends React.Component{
render () {
    return(

        <div className="container"> 
            <div className="Buttons_Areas">
                <Button className="btn btn-outline">
                    {this.props.text}
                </Button>
            </div>
         </div>
    );
}
}
export default Boton;