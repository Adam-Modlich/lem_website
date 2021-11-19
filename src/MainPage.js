import './MainPage.scss';
import Nav from './Nav.js';
import { LoremIpsum} from 'react-lorem-ipsum';
import ChangePicture from './ChangePicture';
import SSVpicture from './pictures/SSVv2.jpg';

export default function mainPage(){

    return(
        <>
        <Nav />
        <div className="mainSite">
            <div className="projects">
                <div className="slidesContainer">
                    <div className="slides">
                        <img className="picture" src={SSVpicture}></img>
                        {/* <img className="Photon" src={PhotonPicture}></img> */}
                    </div>
                </div>
                <div className="description">
                    <h4>NEWEST PROJECT</h4>
                    <h1>FAST AND <br/>FURIOUS SSV</h1>
                    <LoremIpsum p={1} />    
                </div>
                <ChangePicture />
            </div>







        </div>
        
        
        
        </>
    )
}

