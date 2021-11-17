import './MainPage.scss';
import Nav from './Nav.js';
import SSVpicture from './pictures/SSV.jpg';
import { LoremIpsum, Avatar } from 'react-lorem-ipsum';



export default function mainPage(){
    return(
        <>
        <Nav />
        <div className="mainSite">
            <div className="projects">
                <div className="slidesContainer">
                    <div className="slides">
                        <img className="SSV" src={SSVpicture}></img>
                    </div>
                    <div className="slides">
                        <img className="Photon"></img>
                    </div>
                    <div className="slides">
                        <img className="Cos"></img>
                    </div>
                </div>
                <div className="description">
                    <h4>NEWEST PROJECT</h4>
                    <h1>FAST AND <br/>FURIOUS SSV</h1>
                    <LoremIpsum p={1} />    
                </div>
            </div>







        </div>
        
        
        
        </>
    )
}