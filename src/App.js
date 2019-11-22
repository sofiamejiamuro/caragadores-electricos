import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mapa from './views/Mapa';
import Navigation from './components/Navigation';
import TypePlugs from './views/TypePlugs'


function App() {
  return (
    <Router>
      <Navigation/>
      <div className="container p-1">
        {/* <Route path="/" exact component={Login}/> */}
        <Route path="/mapa" component={Mapa} />
        <Route path="/cargadores" component={TypePlugs} />
        {/* <Route path="/user" component={CreateUser} /> */}
      </div>
    </Router>
  )
}

export default App;
