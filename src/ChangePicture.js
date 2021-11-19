import SSVpicture from './pictures/SSVv2.jpg';
import PhotonPicture from './pictures/photonv2.jpg';
import './MainPage.scss';

export default function ChangePicture(){
    const handleClick = (number,e) => {
        switch(number){
            case '1':
                document.getElementsByClassName('picture')[0].src = SSVpicture;
                document.getElementById('imageSSV').style.backgroundPosition = "bottom";
                document.getElementById('imagePhoton').style.backgroundPosition = "bottom";
                // document.getElementById('imageCos').style.backgroundColor = "white";
            break;
            case '2':
                document.getElementsByClassName('picture')[0].src = PhotonPicture;
                document.getElementById('imageSSV').style.backgroundPosition = "top";
                document.getElementById('imagePhoton').style.backgroundPosition = "top";
                // document.getElementById('imageCos').style.backgroundColor = "white";

            break;
            // case '3':
            //     document.getElementsByClassName('picture')[0].src = SSVpicture;
            //     document.getElementById('imageSSV').style.backgroundColor = "white";
            //     document.getElementById('imagePhoton').style.backgroundColor = "white";
            //     document.getElementById('imageCos').style.backgroundColor = "red";

            // break;
            default:
                alert("Something went wrong");
        }
    }
    return (
        <div className="projectImagesButt">
            {/* <div id="imageSSV"></div> */}
            <div id="imageSSV" onClick={(e) => handleClick('1',e)}></div>
            <div id="imagePhoton" onClick={(e) => handleClick('2',e)}></div>
            {/* <div id="imageCos" onClick={(e) => handleClick('3',e)}></div> */}
        </div>
    );
}

