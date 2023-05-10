import React from "react";

import "./App.css";
import Nabvar from './components/Navbar';
import Hero from './components/Hero';
import Stats from "./components/Statistic";
import Basecon from "./components/Basecon";
import Feature from "./components/Feature";
import ContactUs from './components/ContactUs';
import FooterSec from './components/FooterSec';
import BattleCollection from "./components/BattleCollection";
import RegNow from "./components/RegNow";
import Testimonial from "./components/Testimonial";
import JoinNow from "./components/JoinNow";

import '@fortawesome/fontawesome-svg-core/styles.css';

function App() {
  return (
    <>
    <div className="container-fluid toP"> 
      <Nabvar />
      <Hero />
      </div>

      <Basecon />
      
      <div className="container-fluid featuresBg">
      <Feature/>
      </div>

      <div className="container-fluid battleCollectionBG">
      <BattleCollection />
      </div>

      <div className="container regNow">
      <RegNow />
      </div>

      <div className="container-fluid featuresBg">
      <Testimonial />
      </div>

      <div className="container joinNowCon">
      <JoinNow />
      </div>
      <Stats />
      <ContactUs />
      <FooterSec />

    </>

    
  );
}

export default App;
