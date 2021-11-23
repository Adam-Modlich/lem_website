import './MainPage.scss';
import Nav from './Nav.js';
import ChangePicture from './ChangePicture';
import SSVpicture from './pictures/SSV.jpg';
import PhotonPicture from './pictures/photonv2.jpg';
import { LoremIpsum} from 'react-lorem-ipsum';


export default function mainPage(){

    return(
        <>
        <Nav />
        <div className="mainSite">
            <div className="projects">
                {/* <div className="slidesContainer"> */}
                    <div className="slides">
                        <img id="picture" src={SSVpicture}></img>
                        <img id="picture2" src={PhotonPicture}></img>
                    </div>
                {/* </div> */}
                <div className="description">
                    <p id="para1">
                        <h4>NEWEST PROJECT</h4>
                        <h1>FAST AND <br/>FURIOUS SSV</h1>
                        <LoremIpsum p={1} />    
                    </p>
                    <p id="para2">
                        <h4>PREVIOUS PROJECT</h4>
                        <h1>PHOTON SPEED<br/>AND POWER</h1>
                        <LoremIpsum p={1} />    
                    </p>
                </div>
                <ChangePicture />
            </div>







        </div>
        
        
        
        </>
    )
}

