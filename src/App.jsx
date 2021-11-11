import React, { Fragment } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTopHandler from './Hooks/ScrollToTopHandler';
//import Footer from './components/layout/Footer';
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
      <ScrollToTopHandler />
        <Routes>
          <Route path='/' element={<FrontPage />}></Route>
          <Route path='/cv' element={<CV/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/chatraChatExpanded' element={<FrontPage/>}></Route>

          /*404 route*/ */
          <Route path="" component={<NotFound/>} />
        </Routes>
      </Fragment>

    </Router>
  );
}

export default App;
