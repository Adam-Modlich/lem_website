import picture from '../src/pictures/lem_logo_white.jpg';
import Hamburger from './Hamburger.js';
import NavOptions from './NavOptions.js';
import { useState } from 'react';
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

    return(
        <div className="navbar">
            <Link to="/" style={linkStyle}><img src={picture}></img></Link>
            <div className="hamburgerMenu" onClick={toggleHamburger}>
                <Hamburger isOpen={hamburgerOpen}/>
            </div>
            
            <NavOptions isOpen={hamburgerOpen}/>
        </div>
    )
}