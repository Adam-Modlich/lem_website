
import './MainPage.scss';
// import { LoremIpsum} from 'react-lorem-ipsum';


export default function ChangePicture(){


    const handleClick = (number,e) => {
        const para1 = document.getElementById('para1');
        const para2 = document.getElementById('para2');
        const picture = document.getElementById('picture');
        const picture2 = document.getElementById('picture2');
        const imageSSV = document.getElementById('imageSSV');
        const imagePhoton = document.getElementById('imagePhoton');

        // console.log(picture.style.visibility)

        if(picture.style.visibility === "visible"){
            imageSSV.style.backgroundPosition = "top";
            imagePhoton.style.backgroundPosition = "top";

            picture.style.visibility ="hidden";
            picture2.style.visibility = "visible";
            picture2.className = 'slidesAnimation2';
            picture.classList.remove("slidesAnimation1");

            para2.className = 'paragraph2';
            para2.style.visibility = "visible";
            para1.classList.remove("paragraph1");
            para1.style.visibility = "hidden";

            imageSSV.style.backgroundColor = "black";
            imagePhoton.style.backgroundColor = "white";
        }
        else{
            imageSSV.style.backgroundPosition = "bottom";
            imagePhoton.style.backgroundPosition = "bottom";

            para1.className = 'paragraph1';
            para1.style.visibility = "visible";
            para2.classList.remove("paragraph2");
            para2.style.visibility = "hidden";

            picture.style.visibility ="visible";
            picture2.style.visibility = "hidden";
            picture.className = 'slidesAnimation1';
            picture2.classList.remove("slidesAnimation2");


            imageSSV.style.backgroundColor = "white";
            imagePhoton.style.backgroundColor = "black";
        }

        
    }
    return (
        <div className="projectImagesButt">
            <div id="imageSSV" onClick={(e) => handleClick('1',e)}><i className='fa fa-angle-double-right' ></i></div>
            <div id="imagePhoton" onClick={(e) => handleClick('2',e)}><i className='fa fa-angle-double-left' ></i></div>
        </div>
    );
}

