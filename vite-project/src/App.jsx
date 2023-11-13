import './App.css'
import Section3 from './components/psdNora.jsx'
import SectionNora from './components/psdNora2.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "/components/footer/Footer";
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
            < Footer />
            </>} />
          </Routes>
        </Router>
      );
    
}

export default App
