import './Nav.scss';
import React, { useEffect, useState } from 'react';
// import $ from jQuery;
import {
  NavLink,
} from "react-router-dom";
import pl from './pl-PL.json';
import en from './en-EN.json';
import polandIcon from './poland.png';
import englandIcon from './england.png';

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


export default function NavOptions({isOpen, isClosing, func}){

  const [lenBtn, setLenBtn] = useState(pl);
  const [lan, setLan] = useState("PL")
  const [iconSrc, setIconSrc] = useState(englandIcon)

  func(lenBtn)

  const changeLen = () => {
    if(lenBtn == pl) {
      setLan("PL")
      setLenBtn(en);
      setIconSrc(polandIcon)
    }
    if(lenBtn == en) {
      setLan("EN")
      setLenBtn(pl);
      setIconSrc(englandIcon)
    }
  }
 
    return(
      <>
        <div className="optionList">
          <ul>
            <li onClick={ScrollToTop}><NavLink exact activeClassName="active" to="/aboutUs" state={{ len: lenBtn }} 
              style={linkStyle} onClick={isClosing}>{lenBtn.aboutUsPage[0].aboutUsPage}</NavLink></li>
            {/* <li onClick={ScrollToTop} ><NavLink exact activeClassName="active" to="/Achievements" style={linkStyle} onClick={isClosing} >Osiągnięcia</NavLink></li>    */}
            <li onClick={ScrollToTop} ><NavLink exact activeClassName="active" to="/Projects" state={{ len: lenBtn }}  style={linkStyle} onClick={isClosing} >{lenBtn.projectsPage[0].projectsPage}</NavLink></li>
            {/* <li onClick={ScrollToTop} ><NavLink to="/Wojcik" style={linkStyleSpecial} onClick={isClosing}>Wójcik Electric Race</NavLink></li> */}
            <li onClick={ScrollToTop} ><NavLink exact activeClassName="active" to="/LRP" state={{ len: lenBtn }}  style={linkStyleSpecial} onClick={isClosing}>{lenBtn.LRPPage[0].LRPPage}</NavLink></li>
            <li onClick={ScrollToTop} ><NavLink exact activeClassName="active" to="/TrustUs" state={{ len: lenBtn }} style={linkStyle} onClick={isClosing}>{lenBtn.trustUsPage[0].trustUsPage}</NavLink></li>
            <li onClick={ScrollToTop} ><NavLink exact activeClassName="active" to="/ContactUs" state={{ len: lenBtn }} style={linkStyle} onClick={isClosing}>{lenBtn.contactPage[0].contactPage}</NavLink></li>
            <li className="iconsMobile">
              <a href="https://www.facebook.com/LEMWroclaw" className="fa fa-facebook" target="_blank" onClick={isClosing}></a>
              <a href="https://www.instagram.com/lemwroclaw/" className="fa fa-instagram" target="_blank" onClick={isClosing}></a>
              <a href="https://www.youtube.com/channel/UCKeV5Mi90jYVxipqL6RhEyg" className="fa fa-youtube-play" target="_blank" onClick={isClosing}></a>
              <a href="https://www.facebook.com/LEMWroclaw" className="fab fa-tiktok" target="_blank" onClick={isClosing}></a>
              <a href="https://www.linkedin.com/company/lemwroclaw/?originalSubdomain=pl" class="fab fa-linkedin" target="_blank" onClick={isClosing}></a>
              <button class="len-change-btn" onClick={changeLen}><img src={iconSrc}/></button>
            </li>
          </ul>
        </div>
        <ul className="icons">
          <li ><a href="https://www.facebook.com/LEMWroclaw" className="fa fa-facebook" target="_blank" onClick={isClosing}></a></li>
          <li ><a href="https://www.instagram.com/lemwroclaw/" className="fa fa-instagram" target="_blank" onClick={isClosing}></a></li>
          <li ><a href="https://www.youtube.com/channel/UCKeV5Mi90jYVxipqL6RhEyg" className="fa fa-youtube-play" target="_blank" onClick={isClosing}></a></li>
          <li ><a href="https://www.tiktok.com/@lem_wroclaw" className="fab fa-tiktok" target="_blank" onClick={isClosing}></a></li>
          <li ><a href="https://www.linkedin.com/company/lemwroclaw/?originalSubdomain=pl" class="fab fa-linkedin" target="_blank" onClick={isClosing}></a></li>
          <li><button class="len-change-btn" onClick={changeLen}><img src={iconSrc}/></button></li>
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