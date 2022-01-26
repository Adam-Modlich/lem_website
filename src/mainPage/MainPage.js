import './MainPage.scss';
import ChangePicture from './ChangePicture';
import SSVpicture from '../pictures/SSV.png';
import PhotonPicture from '../pictures/Photonv2.png';
import LemLogo from '../pictures/lem_logo_white.jpg'
import { LoremIpsum} from 'react-lorem-ipsum';
import Nav from '../Nav'


export default function mainPage(){

    return(
        <>
        <div className='firstPage'>
            <img id="beginPictureStart" src={LemLogo}></img>
            <div className="loadingMoto">
                <i class="fa fa-motorcycle" aria-hidden="true"></i>
            </div>
        </div>

        <div className="mainSite">
            <div className="projects">
                <div className="slides">
                    <img id="picture" src={SSVpicture} style={{visibility:"visible"}}></img>
                    <img id="picture2" src={PhotonPicture}></img>
                </div>
                <div className="description">
                    <p id="para1">
                        <h4>NEWEST PROJECT</h4>
                        <h1>FAST AND <br/>FURIOUS SSV</h1>
                        <p className="shortText">LEM Photon to pierwszy polski motocykl szosowy, w pełni zbudowany przez studentów, przeznaczony do wyścigów na torze.  </p>  
                    </p>
                    <p id="para2">
                        <h4>PREVIOUS PROJECT</h4>
                        <h1>PHOTON SPEED<br/>AND POWER</h1>
                        <p className="shortText">LEM Photon to pierwszy polski motocykl szosowy, w pełni zbudowany przez studentów, przeznaczony do wyścigów na torze. LEM Photon sprawdził się zaliczając wszystkie konkurencje z jednymi z najwyższych wyników  </p>  
                    </p>
                </div>
                <ChangePicture />
            </div>







        </div>
        
        
        
        </>
    )
}

