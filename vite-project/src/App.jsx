import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import PopularMenu from "./components/PopularMenu";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <PopularMenu />
      {/* Other components */}
    </div>
  );
}

export default App;
