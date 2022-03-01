import picture from '../src/pictures/lem_logo_white.jpg';
import Hamburger from './Hamburger.js';
import NavOptions from './NavOptions.js';
import { useState } from 'react';
import $ from 'jquery'
import {
  Link,
} from "react-router-dom";

const linkStyle = {
    gridColumn: "2",
    gridRow: "1",
    width: "180px",
  
  };

export default function Nav(){
    const[hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    }

    const closeHamburger = () =>{
        setHamburgerOpen(false)
    }

    let height = $('.navbar:visible').css('height');

    $(document).on('ready', function(){
        height = $('.navbar:visible').css('height') // will give you css height
    });


    return(
        <div className="divNavbar" style={{position: "relative", top: "0%", width: "100%"}}>
        <div className="navbar">
            <Link to="/" style={linkStyle} className="divImgNavbar"><img src={picture} className="imgNavbar"></img></Link>
            <div className="hamburgerMenu" onClick={toggleHamburger}>
                <Hamburger isOpen={hamburgerOpen}/>
            </div>
            
            <NavOptions isOpen={hamburgerOpen} isClosing={closeHamburger}/>
        </div>
        </div>
    )
}