import React from  'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css'
import Home from './components/pages/Home';
import About from './components/pages/About'


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
       <Route path='/' exact component={Home}/>
       <Route path='/about' exact component={About}/>
       
      </Switch>
    </Router>
    </>
  );
}

export default App;
