import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTopHandler from "./Hooks/ScrollToTopHandler";
//import Footer from './components/layout/Footer';
import Navbar from "./components/layout/Navbar";
//import Contact from "./pages/Contact";
const Contact = lazy(() => import("./pages/Contact"));
import CV from "./pages/CV";
import FrontPage from "./pages/FrontPage";
import NotFound from "./pages/NotFound";
//import SpinnerLoader from "./components/SpinnerLoader";
//import Projects from "./pages/Projects";
const Projects = lazy(() => import("./pages/Projects"));

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <ScrollToTopHandler />
      <Suspense fallback={<div className="mt2 center-txt txt-lg">⏳ Please Wait ...</div>}>
      <Routes>
        <Route path="/" exact element={<FrontPage />}></Route>
        <Route path="/cv" exact element={<CV />}></Route>
        <Route path="/projects" exact element={<Projects />}></Route>
        <Route path="/contact" exact element={<Contact />}></Route>
        <Route path="/chatraChatExpanded" element={<FrontPage />}></Route>
        /*404 route*/ */
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
