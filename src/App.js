import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navigation from './components/Navigation';
import Mapa from './views/Mapa';

function App() {
  return (
    <Router>
      {/* <Navigation/> */}
      <div className="container p-1">
        {/* <Route path="/" exact component={Login}/> */}
        <Route path="/Mapa" component={Mapa}/>
        {/* <Route path="/create" component={CreateNote}/>
        <Route path="/user" component={CreateUser}/> */}
      </div>
    </Router>
  )
}

export default App;
