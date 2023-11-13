import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "/components/footer/Footer";

import { Subscribe } from "/components/Subscribe";


function App() {
    return (
        <>
        <Footer />
        {/* <Router>
          <Routes>
            <Route path="/Homes" element={< Footer />} />
          </Routes>
        </Router> */}
        </>
      );

}

export default App