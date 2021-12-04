import MainPage from './mainPage/MainPage.js';
import AboutUs from './AboutUs/aboutUs';
import Contact from './Contact/Contact.js'
import Nav from './Nav.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

function App() {

  // document.body.style = 'background: linear-gradient(90deg, rgba(26,45,68,1) 10%, rgba(42,59,80,1) 24%, rgba(61,80,101,1) 38%, rgba(84,105,129,1) 53%, rgba(111,136,162,1) 70%, rgba(172,189,209,1) 92%);'
  // function hamburger()
  // document.body.style = "background:linear-gradient(to right, #000000 65%, #0066ff 100%)";
  // document.body.style = "    background: linear-gradient(to right, #000000 63%, #3333cc 100%)";
  document.body.style = "background:black"

  return (
    <>
    <Router> 
    <Nav/>
      <Routes>
        <Route exact path="/" element={<MainPage/>}/>
        <Route exact path="/aboutus" element={<AboutUs/>}/>
        <Route exact path="/Achievements" element={<MainPage/>}/>
        <Route exact path="/Projects" element={<MainPage/>}/>
        <Route exact path="/TrustedUs" element={<MainPage/>}/>
        <Route exact path="/ContactUs" element={<Contact/>}/>

      </Routes>

    </Router> 
    </>
  );
}

export default App;
