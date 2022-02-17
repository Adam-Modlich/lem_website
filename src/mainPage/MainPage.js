import './MainPage.scss';
import ChangePicture from './ChangePicture';
import SSVpicture from '../pictures/SSV.png';
import PhotonPicture from '../pictures/Photonv2.png';
import LemLogo from '../pictures/lem_logo_white.jpg';
import motorBike from '../pictures/motorbikeIcon.png';
import { LoremIpsum} from 'react-lorem-ipsum';
import Nav from '../Nav'


export default function mainPage(){

    return(
        <>
        <div className='firstPage'>
            <img id="beginPictureStart" src={LemLogo}></img>
            <div className="loadingMoto">
                <img src={motorBike} alt="" />
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
                        <p className="shortText">Mocny i ekologiczny - taki jest właśnie LEM SSV. Zespół LEM Wrocław po raz pierwszy stworzył terenowy pojazd czterokołowy, będący wizją przyszłości zeroemisyjnych Rajdów Dakar. Proces twórczy przy zasadach zero waste, a efekt końcowy dający potężną dawkę emocji. Czy może być lepiej?</p>  
                    </p>
                    <p id="para2">
                        <h4>PREVIOUS PROJECT</h4>
                        <h1>PHOTON SPEED<br/>AND POWER</h1>
                        <p className="shortText">Podbił hiszpański MotorLand Aragón, a na koncie ma już podium na torze F1 we Włoszech. To jednak możliwe, że studencki prototyp wyciąga nawet 200km/h. Poznaj innowacyjny projekt LEM Photon - pierwszy polski elektryczny motocykl szosowy zbudowany w pełni przez studentów Politechniki Wrocławskiej. </p>  
                    </p>
                </div>
                <ChangePicture />
            </div>







        </div>
        
        
        
        </>
    )
}

