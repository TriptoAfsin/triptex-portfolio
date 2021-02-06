import React from 'react'

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Contact from './pages/Contact';
import CV from './pages/CV';
import FrontPage from './pages/FrontPage';
import Projects from './pages/Projects';



function App() {
  return (
    <Router>
      <Navbar></Navbar>
      
     <Switch>
        <Route path='/' exact component={FrontPage}></Route>
        <Route path='/cv' exact component={CV}></Route>
        <Route path='/projects' exact component={Projects}></Route>
        <Route path='/contact' exact component={Contact}></Route>
     </Switch>
    </Router>
  );
}

export default App;
