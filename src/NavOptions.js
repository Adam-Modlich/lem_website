import './Nav.scss';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
// import Achivements from './Achievements/Achievements';
// import Projects from './Projects/Projects';
// import trustUs from './trustUs/trustUs';
// import Contact from './Contact/Contact';

const linkStyle = {
  fontSize: "inherit",
  padding: "0",
  margin: "0"

};

export default function NavOptions({isOpen}){
    return(
      <>
        <div className="optionList">
          <ul>
            <li><Link to="/aboutUs" style={linkStyle}>O Nas</Link></li>
            <li><Link to="/Achievements" style={linkStyle}>Osiągnięcia</Link></li>
            <li><Link to="/Projects" style={linkStyle}>Projekty</Link></li>
            <li><Link to="/TrustedUs" style={linkStyle}>Wspierają Nas</Link></li>
            <li><Link to="/ContactUs" style={linkStyle}>Kontakt</Link></li>
            <li className="iconsMobile">
              <a href="https://www.facebook.com/LEMWroclaw" className="fa fa-facebook"></a>
              <a href="https://www.instagram.com/lemwroclaw/" className="fa fa-instagram"></a>
              <a href="https://www.youtube.com/channel/UCKeV5Mi90jYVxipqL6RhEyg" className="fa fa-youtube-play"></a>
              <a href="https://www.facebook.com/LEMWroclaw" className="fab fa-tiktok"></a>
            </li>
          </ul>
        </div>
        <ul className="icons">
          <li ><a href="https://www.facebook.com/LEMWroclaw" className="fa fa-facebook"></a></li>
          <li ><a href="https://www.instagram.com/lemwroclaw/" className="fa fa-instagram"></a></li>
          <li ><a href="https://www.youtube.com/channel/UCKeV5Mi90jYVxipqL6RhEyg" className="fa fa-youtube-play"></a></li>
          <li ><a href="https://www.facebook.com/LEMWroclaw" className="fab fa-tiktok"></a></li>
        </ul>
      <style jsx>{`
          
          .optionList{
            height: ${ isOpen ? '400px' : '0'};
          }

          .optionList li{
            display: ${ isOpen ? 'block' : 'none'};
          }

        `}</style>
      </>

    
    )
}