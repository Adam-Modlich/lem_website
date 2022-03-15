import MainPage from './mainPage/MainPage.js';
import AboutUs from './AboutUs/aboutUs';
import Contact from './Contact/Contact.js'
import Nav from './Nav.js';
import Projects from './Projects/Projects.js';
import TrustUs from './TrustUs/TrustUs.js';
import Wojcik from './Wojcik/Wojcik.js';
import {
  Routes,
  HashRouter,
  Route,
} from "react-router-dom";
import Achievements from './Achievements/Achievements.js';

function App() {

  // document.body.style = 'background: linear-gradient(90deg, rgba(26,45,68,1) 10%, rgba(42,59,80,1) 24%, rgba(61,80,101,1) 38%, rgba(84,105,129,1) 53%, rgba(111,136,162,1) 70%, rgba(172,189,209,1) 92%);'
  // function hamburger()
  // document.body.style = "background:linear-gradient(to right, #000000 65%, #0066ff 100%)";
  // document.body.style = "    background: linear-gradient(to right, #000000 63%, #3333cc 100%)";
  document.body.style = "background:black"

  return (
    <>
    <HashRouter> 
    <Nav/>
      <div style={{height: "100%"}}>
      <Routes>
        <Route exact path="/" element={<MainPage/>}/>
        <Route exact path="/aboutus" element={<AboutUs/>}/>
        <Route exact path="/Achievements" element={<Achievements/>}/>
        <Route exact path="/Wojcik" element={<Wojcik/>}/>
        <Route exact path="/Projects" element={<Projects/>}/>
        <Route exact path="/TrustUs" element={<TrustUs/>}/>
        <Route exact path="/ContactUs" element={<Contact/>}/>

      </Routes>
      </div>
    </HashRouter> 
    </>
  );
}

export default App;
