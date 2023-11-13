import './App.css'
import {Section3} from './components/psdNora.jsx'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
    return (
        <Router>
          <Routes>
            <Route path="/Homes" element={< Section3 />} />
          </Routes>
        </Router>
      );
    
}

export default App
