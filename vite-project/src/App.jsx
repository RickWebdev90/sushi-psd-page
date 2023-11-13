import './App.css'
import Section3 from './components/psdNora.jsx'
import SectionNora from './components/psdNora2.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "/components/footer/Footer";

import { Subscribe } from "/components/Subscribe";
import SectionRick from './components/mainarea-2'

function App() {
    return (
        <Router>
          <Routes>
            <Route path="/" element=
            {<>
            < Section3/> 
            < SectionNora />
            < SectionRick />

            </>} />
          </Routes>
        </Router>
      );
    
}

export default App