import SSVpicture from './pictures/SSV.jpg';
import PhotonPicture from './pictures/photonv2.jpg';
import './MainPage.scss';
// import { LoremIpsum} from 'react-lorem-ipsum';


export default function ChangePicture(){

    const handleClick = (number,e) => {
        const para1 = document.getElementById('para1');
        const para2 = document.getElementById('para2');
        const picture = document.getElementById('picture');
        const imageSSV = document.getElementById('imageSSV');
        const imagePhoton = document.getElementById('imagePhoton');
        switch(number){
            case '1':
                picture.src = SSVpicture;
                imageSSV.style.backgroundPosition = "bottom";
                imagePhoton.style.backgroundPosition = "bottom";

                para1.className = 'paragraph1';
                para1.style.visibility = "visible";
                para2.classList.remove("paragraph2");
                para2.style.visibility = "hidden";

                imageSSV.style.backgroundColor = "white";
                imagePhoton.style.backgroundColor = "black";
            break;
            case '2':
                picture.src = PhotonPicture;
                imageSSV.style.backgroundPosition = "top";
                imagePhoton.style.backgroundPosition = "top";

                para2.className = 'paragraph2';
                para2.style.visibility = "visible";
                para1.classList.remove("paragraph1");
                para1.style.visibility = "hidden";

                imageSSV.style.backgroundColor = "black";
                imagePhoton.style.backgroundColor = "white";
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
            <div id="imageSSV" onClick={(e) => handleClick('1',e)}></div>
            <div id="imagePhoton" onClick={(e) => handleClick('2',e)}></div>
            {/* <div id="imageCos" onClick={(e) => handleClick('3',e)}></div> */}
        </div>
    );
}

