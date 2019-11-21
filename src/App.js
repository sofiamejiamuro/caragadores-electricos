import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navigation from './components/Navigation';
import Map from './views/Map';
import Alarma from './views/Alarma';
import ServicioVoz from './views/Servicio-voz';

function App() {
  return (
    <Router>
      {/* <Navigation/> */}
      <div className="container p-1">
        {/* <Route path="/" exact component={Login}/> */}
        <Route path="/Map" component={Map}/>
        {/* <Route path="/create" component={CreateNote}/>
        <Route path="/user" component={CreateUser}/> */}
        <Route path="/Alarma" component={Alarma}/>
        <Route path="/Servicio-voz" component={ServicioVoz}/>

      </div>
    </Router>
  );
}

export default App;
