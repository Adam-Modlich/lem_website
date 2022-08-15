import './MainPage.scss';
import ChangePicture from './ChangePicture';
import SSVpicture from '../pictures/SSV.png';
import PhotonPicture from '../pictures/Photonv2.png';
import LemLogo from '../pictures/lem_logo_white.jpg';
import motorBike from '../pictures/motorbikeIcon.png';


export default function mainPage(props){

    return(
        <>
        {props.lan ?
        <div>
            <div className='firstPage'>
                <img id="beginPictureStart" src={LemLogo}></img>
                <div className="loadingMoto">
                    <img src={motorBike} alt="" />
                </div>
            </div>

            <div className="mainSite">
                <div className="projects">
                    <div className="slides">
                        <img id="picture1" src={SSVpicture} style={{visibility:"visible"}}></img>
                        <img id="picture2" src={PhotonPicture}></img>
                    </div>
                    <div className="description">
                        <p id="para1">
                            <h4>LATEST PROJECT</h4>
                            <h1>FAST AND FURIOUS SSV</h1>
                            <p className="shortText" lang="pl-PL">{props.lan.mainPage[0].paragraph}</p>  
                        </p>
                        <p id="para2">
                            <h4>PREVIOUS PROJECT</h4>
                            <h1>PHOTON SPEED AND POWER</h1>
                            <p className="shortText" lang="pl-PL">{props.lan.mainPage[1].paragraph}</p>  
                        </p>
                    </div>
                    <ChangePicture />
                </div>
            </div>
        </div>
        : null}
        </>
    )
}

