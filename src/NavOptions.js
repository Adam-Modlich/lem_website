import './Nav.scss';
import React from 'react';
// import $ from jQuery;
import {
  NavLink,
} from "react-router-dom";

const linkStyle = {
  fontSize: "inherit",
  padding: "0",
  margin: "0"
};

// const activeLink = {
//   fontSize: "inherit",
//   padding: "0",
//   margin: "0",
//   color: "rgb(250,212,27)"
// };

const linkStyleSpecial = {
  fontSize: "inherit",
  padding: "0",
  margin: "0",
  color: "rgb(250,212,27)"
};

const ScrollToTop = () => {
  window.scrollTo(0,0);
}


export default function NavOptions({isOpen, isClosing}){
    return(
      <>
        <div className="optionList">
          <ul>
            <li onClick={ScrollToTop}><NavLink exact activeClassName="active" to="/aboutUs" style={linkStyle} onClick={isClosing}>O Nas</NavLink></li>
            {/* <li onClick={ScrollToTop} ><NavLink exact activeClassName="active" to="/Achievements" style={linkStyle} onClick={isClosing} >Osiągnięcia</NavLink></li>    */}
            <li onClick={ScrollToTop} ><NavLink exact activeClassName="active" to="/Projects" style={linkStyle} onClick={isClosing} >Projekty</NavLink></li>
            {/* <li onClick={ScrollToTop} ><NavLink to="/Wojcik" style={linkStyleSpecial} onClick={isClosing}>Wójcik Electric Race</NavLink></li> */}
            <li onClick={ScrollToTop} ><NavLink exact activeClassName="active" to="/LRP" style={linkStyleSpecial} onClick={isClosing}>LRP - Le Mans</NavLink></li>
            <li onClick={ScrollToTop} ><NavLink exact activeClassName="active" to="/TrustUs" style={linkStyle} onClick={isClosing}>Wspierają Nas</NavLink></li>
            <li onClick={ScrollToTop} ><NavLink exact activeClassName="active" to="/ContactUs" style={linkStyle} onClick={isClosing}>Kontakt</NavLink></li>
            <li className="iconsMobile">
              <a href="https://www.facebook.com/LEMWroclaw" className="fa fa-facebook" target="_blank" onClick={isClosing}></a>
              <a href="https://www.instagram.com/lemwroclaw/" className="fa fa-instagram" target="_blank" onClick={isClosing}></a>
              <a href="https://www.youtube.com/channel/UCKeV5Mi90jYVxipqL6RhEyg" className="fa fa-youtube-play" target="_blank" onClick={isClosing}></a>
              <a href="https://www.facebook.com/LEMWroclaw" className="fab fa-tiktok" target="_blank" onClick={isClosing}></a>
              <a href="https://www.linkedin.com/company/lemwroclaw/?originalSubdomain=pl" class="fab fa-linkedin" target="_blank" onClick={isClosing}></a>
            </li>
          </ul>
        </div>
        <ul className="icons">
          <li ><a href="https://www.facebook.com/LEMWroclaw" className="fa fa-facebook" target="_blank" onClick={isClosing}></a></li>
          <li ><a href="https://www.instagram.com/lemwroclaw/" className="fa fa-instagram" target="_blank" onClick={isClosing}></a></li>
          <li ><a href="https://www.youtube.com/channel/UCKeV5Mi90jYVxipqL6RhEyg" className="fa fa-youtube-play" target="_blank" onClick={isClosing}></a></li>
          <li ><a href="https://www.tiktok.com/@lem_wroclaw" className="fab fa-tiktok" target="_blank" onClick={isClosing}></a></li>
          <li ><a href="https://www.linkedin.com/company/lemwroclaw/?originalSubdomain=pl" class="fab fa-linkedin" target="_blank" onClick={isClosing}></a></li>
        </ul>
      <style jsx>{`
          
          .optionList{
            height: ${ isOpen ? '420px' : '0'};
          }

          .optionList li{
            display: ${ isOpen ? 'block' : 'none'};
          }

        `}</style>
      </>

    
    )
}