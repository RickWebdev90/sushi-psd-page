import './App.css'
import Section3 from './components/psdNora.jsx'
import SectionNora from './components/psdNora2.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
    return (
        <Router>
          <Routes>
            <Route path="/" element=
            {<>
            < Section3/> 
            < SectionNora />
            </>} />
          </Routes>
        </Router>
      );
    
}

export default App
