import './MainPage.scss';
import Nav from './Nav.js';
import SSVpicture from './pictures/SSV.jpg';


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
                    <p>costam costam</p>
                </div>
            </div>







        </div>
        
        
        
        </>
    )
}