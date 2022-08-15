import MainPage from './mainPage/MainPage.js';
import AboutUs from './AboutUs/aboutUs';
import Contact from './Contact/Contact.js'
import Nav from './Nav.js';
import LRP from './LRP/LRP.js';
import Projects from './Projects/Projects.js';
import TrustUs from './TrustUs/TrustUs.js';
import Wojcik from './Wojcik/Wojcik.js';
import {
  Routes,
  HashRouter,
  Route,
} from "react-router-dom";
import Achievements from './Achievements/Achievements.js';
import { useState } from 'react';

function App() {

  const [lan,setLan] = useState();

  document.body.style = "background:black"

  const pull_data_again = (data) => {
    setLan(data)
  }

  return (
    <>
    <HashRouter> 
    <Nav func={pull_data_again}/>
      <div style={{height: "100%"}}>
      <Routes>
        <Route exact path="/" element={<MainPage lan={lan}/>}/>
        <Route exact path="/aboutUs" element={<AboutUs lan={lan}/>}/>
        <Route exact path="/Achievements" element={<Achievements lan={lan}/>}/>
        <Route exact path="/Wojcik" element={<Wojcik lan={lan}/>}/>
        <Route exact path="/LRP" element={<LRP lan={lan}/>}/>
        <Route exact path="/Projects" element={<Projects lan={lan}/>}/>
        <Route exact path="/TrustUs" element={<TrustUs lan={lan}/>}/>
        <Route exact path="/ContactUs" element={<Contact lan={lan}/>}/>

      </Routes>
      </div>
    </HashRouter> 
    </>
  );
}

export default App;
