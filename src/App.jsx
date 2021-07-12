import React, { Fragment } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTopHandler from './components/Hooks/ScrollToTopHandler';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Contact from './pages/Contact';
import CV from './pages/CV';
import FrontPage from './pages/FrontPage';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';




function App() {
  return (
    <Router >
      <Navbar></Navbar>
      <Fragment>
        <ScrollToTopHandler></ScrollToTopHandler>
        <Switch>
          <Route path='/' exact component={FrontPage}></Route>
          <Route path='/cv' exact component={CV}></Route>
          <Route path='/projects' exact component={Projects}></Route>
          <Route path='/contact' exact component={Contact}></Route>
          <Route path='/chatraChatExpanded' exact component={FrontPage}></Route>

          /*404 route*/ */
          <Route path="" component={NotFound} />
        </Switch>
      </Fragment>

    </Router>
  );
}

export default App;
