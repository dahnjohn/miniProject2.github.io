import React from "react";

import "./App.css";
import Nabvar from './components/Navbar';
import Hero from './components/Hero';
import Stats from "./components/Statistic";
import Basecon from "./components/Basecon";
import Feature from "./components/Feature";

function App() {
  return (
    <>
    <div className="container-fluid toP"> 
      <Nabvar />
      <Hero />
      </div>

      <Stats />
      <Basecon />
      <Feature/>


    </>
    
     

    
  );
}

export default App;
