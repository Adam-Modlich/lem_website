import picture from '../src/pictures/lem_logo_white.jpg';
import Hamburger from './Hamburger.js';
import NavOptions from './NavOptions.js';
import { useState } from 'react';


export default function Nav(){
    const[hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    }

    return(
        <div className="navbar">
            <img src={picture}></img>
            <div className="hamburgerMenu" onClick={toggleHamburger}>
                <Hamburger isOpen={hamburgerOpen}/>
            </div>
            
            <NavOptions isOpen={hamburgerOpen}/>
        </div>
    )
}