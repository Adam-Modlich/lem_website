import './Nav.scss';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

const linkStyle = {
  fontSize: "inherit",
  padding: "0",
  margin: "0"
};

const activeLink = {
  fontSize: "inherit",
  padding: "0",
  margin: "0",
  color: "rgb(250,212,27)"
};

const linkStyleSpecial = {
  fontSize: "inherit",
  padding: "0",
  margin: "0",
  color: "rgb(250,212,27)"
};

export default function NavOptions({isOpen}){
    return(
      <>
        <div className="optionList">
          <ul>
            <li><NavLink exact activeClassName="active" to="/aboutUs" style={linkStyle}>O Nas</NavLink></li>
            {/* <li><Link to="/Achievements" style={linkStyle}>Osiągnięcia</Link></li> */}
            <li><NavLink exact activeClassName="active" to="/Projects" style={linkStyle}>Projekty</NavLink></li>
            <li><NavLink to="/Wojcik" style={linkStyleSpecial}>Wójcik Race</NavLink></li>
            <li><NavLink exact activeClassName="active" to="/TrustUs" style={linkStyle}>Wspierają Nas</NavLink></li>
            <li><NavLink exact activeClassName="active" to="/ContactUs" style={linkStyle}>Kontakt</NavLink></li>
            <li className="iconsMobile">
              <a href="https://www.facebook.com/LEMWroclaw" className="fa fa-facebook" target="_blank"></a>
              <a href="https://www.instagram.com/lemwroclaw/" className="fa fa-instagram" target="_blank"></a>
              <a href="https://www.youtube.com/channel/UCKeV5Mi90jYVxipqL6RhEyg" className="fa fa-youtube-play" target="_blank"></a>
              <a href="https://www.facebook.com/LEMWroclaw" className="fab fa-tiktok" target="_blank"></a>
              <a href="https://www.linkedin.com/company/lemwroclaw/?originalSubdomain=pl" class="fab fa-linkedin" target="_blank"></a>
            </li>
          </ul>
        </div>
        <ul className="icons">
          <li ><a href="https://www.facebook.com/LEMWroclaw" className="fa fa-facebook" target="_blank"></a></li>
          <li ><a href="https://www.instagram.com/lemwroclaw/" className="fa fa-instagram" target="_blank"></a></li>
          <li ><a href="https://www.youtube.com/channel/UCKeV5Mi90jYVxipqL6RhEyg" className="fa fa-youtube-play" target="_blank"></a></li>
          <li ><a href="https://www.facebook.com/LEMWroclaw" className="fab fa-tiktok" target="_blank"></a></li>
          <li ><a href="https://www.linkedin.com/company/lemwroclaw/?originalSubdomain=pl" class="fab fa-linkedin" target="_blank"></a></li>
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