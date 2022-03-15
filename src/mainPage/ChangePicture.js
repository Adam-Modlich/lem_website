
import './MainPage.scss';
// import { LoremIpsum} from 'react-lorem-ipsum';
import $ from 'jquery';


export default function ChangePicture(){
    let visiblePictureNum = 1;

    const moveSlides = (n) => {
        showSlides(visiblePictureNum += n);
        console.log(visiblePictureNum);
    }

    const showSlides = (n) => {
        if(n>2){ visiblePictureNum = 1}
        if(n<1){ visiblePictureNum = 2}
        for(let i = 1; i < 3; i++){
            if(i === visiblePictureNum){
                $(`#para${(visiblePictureNum)}`).css("visibility", "visible")
                $(`#picture${(visiblePictureNum)}`).css("visibility", "visible")
                $(`#para${(visiblePictureNum)}`).addClass("paragraph1")
                $(`#picture${(visiblePictureNum)}`).addClass('slidesAnimation')
            }
            else{
                $(`#para${(i)}`).css("visibility", "hidden")
                $(`#picture${(i)}`).css("visibility", "hidden")
                $(`#para${(i)}`).removeClass("paragraph1")
                $(`#picture${(i)}`).removeClass('slidesAnimation')
            }
        }  
    }
    
    return (
        <div className="projectImagesButt">
            <div id="imageSSV" onClick={(e) => moveSlides(1,e)}><i className='fa fa-angle-double-right' ></i></div>
            <div id="imagePhoton" onClick={(e) => moveSlides(-1,e)}><i className='fa fa-angle-double-left' ></i></div>
        </div>
    );
}

