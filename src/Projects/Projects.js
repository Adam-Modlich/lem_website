import '../Projects/Projects.scss';
import CountUp, { useCountUp } from 'react-countup';
import $ from 'jquery';
import VisibilitySensor from 'react-visibility-sensor';

export default function Projects(){

    const switchPictureRight = () => {
        let activeVisible;
        let i = 1;
        for(i; i<4; i++){
            if($(`.parents${(i)}`).css("visibility") == "visible"){
                activeVisible = i;
            }
        }
        
        $(`.parents${(activeVisible)}`).css("visibility", "hidden");
        if(activeVisible == 2){
            $(`.parents3`).css({visibility: "visible"});
            $(`.parents3`).animate({left:0+"px"});
            $(`.parents1`).css({visibility: "hidden"});
            $(`.parents${((activeVisible+2)%3)}`).css({left: $(window).width()});
            $(`.parents${activeVisible}`).css({left: (-1)*$(window).width()});
        }
        else if(activeVisible == 1){
            $(`.parents${((activeVisible+1)%3)}`).css({visibility: "visible"});
            $(`.parents${((activeVisible+1)%3)}`).animate({left:0+"px"});
            $(`.parents3`).css({left: $(window).width()});
            $(`.parents${activeVisible}`).css({left: (-1)*$(window).width()});
            
        }
        else{
            $(`.parents${((activeVisible+2)%3)}`).css({left: $(window).width()});
            $(`.parents${activeVisible}`).css({left: (-1)*$(window).width()});
            $(`.parents1`).animate({left:0+"px"});
            $(`.parents1`).css({visibility: "visible"});
        }      
        
        
    }

    const switchPictureLeft = () => {
        let activeVisible;
        let i = 1;
        for(i; i<4; i++){
            if($(`.parents${(i)}`).css("visibility") == "visible"){
                activeVisible = i;
            }
        }
        
        $(`.parents${(activeVisible)}`).css("visibility", "hidden");
        if(activeVisible == 2){
            $(`.parents1`).css({visibility: "visible"});
            $(`.parents1`).animate({left:0+"px"});
            $(`.parents3`).css({visibility: "hidden"});
            $(`.parents${activeVisible}`).css({left: $(window).width()});
            $(`.parents3`).css({left: (-1)*$(window).width()});
        }
        else if(activeVisible == 1){
            $(`.parents3`).css({visibility: "visible"});
            $(`.parents3`).animate({left:0+"px"});
            $(`.parents1`).css({left: $(window).width()});
            $(`.parents2`).css({left: (-1)*$(window).width()});
            
        }
        else{
            $(`.parents3`).css({left: $(window).width()});
            $(`.parents1`).css({left: (-1)*$(window).width()});
            $(`.parents2`).animate({left:0+"px"});
            $(`.parents2`).css({visibility: "visible"});
        }  

    }

    function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}


    return(
        <>
        <div className='pageContainer'>
        <div className="parents1 parents">
            <div className='text'>
                <h1 className="projectTitle">Photon</h1>
                <h4 className='projectTitleDesc'>Motocykl elektryczny klasy Moto3</h4>
                <p lang="en">LEM Photon jest pierwszym w Polsce elektrycznym motocyklem szosowym w pełni zbudowanym przez studentów Politechniki Wrocławskiej. Prototyp został zaprojektowany i skonstruowany z myślą o udziale w międzynarodowych zawodach MotoStudent 2021, studenckiego odpowiednika MotoGP.
                LEM Photon okazał się być dumą projektu LEM Wrocław i przyczynił się do zdobycia przez zespół tytułu Koła Naukowego Roku 2021 według Studenckiego Ruchu Naukowego.
                Motocykl odwiedził już wiele torów w Polsce, w tym Tor Poznań oraz Tor Krzywa. Podbił także te zagraniczne - w Hiszpanii na MotorLandzie Aragón oraz we Włoszech na Autodromo Enzo e Dino Ferrari gdzie uzyskał wysokie lokaty.

                {/* LEM Wrocław startował z tym projektem we wspomnianych międzynarodowych zawodach MotoStudent 2021, gdzie uzyskał tytuł Best Rookie Team oraz zajął 6 miejsce w klasyfikacji generalnej na 46 zespołów studenckich z całego świata. 
                Po znakomitych wynikach uzyskanych w Hiszpanii, zespół został zaproszony z projektem LEM Photon na pierwszą edycję międzynarodowych zawodów Moto Engineering Italy, gdzie stanął na podium zajmując III miejsce.
                Wszystkie przejazdy na LEM Photonie były wykonane przez Krzysztofa Borysa, wykwalifikowanego kierowcę z tytułem Wicemistrza Polski SSP300 oraz wielokrotnego Zdobywcę Pucharu Polski. */}
                </p>
                <div className="iconsContainer">
                    <div className='iconsProjects'>
                        <h1 className="value"><CountUp end={57} duration={1.5} redraw={true}>{({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}</CountUp> kW</h1>
                        <h4 className="valueIs">Moc</h4>
                    </div>
                    <div className='iconsProjects'>
                        <h1 className="value"><CountUp end={200} duration={1.5} redraw={true}>{({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}</CountUp> km/h</h1>
                        <h4 className="valueIs">Prędkość max.</h4>

                    </div>
                    <div className='iconsProjects'>
                        <h1 className="value"><CountUp end={140} duration={1.5} redraw={true}>{({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}</CountUp> kg</h1>
                        <h4 className="valueIs">Masa</h4>

                    </div>
                    <div className='iconsProjects'>
                        <h1 className="value"><CountUp end={90} duration={1.5} redraw={true}>{({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}</CountUp> km</h1>
                        <h4 className="valueIs">Zasięg</h4>

                    </div>
                </div>
            </div>
            <div className='switchButton'>
                <i className='fa fa-angle-double-right' onClick={switchPictureRight} style={{fontSize:"60px"}}></i>
                <i className='fa fa-angle-double-left' onClick={switchPictureLeft} style={{fontSize:"60px"}}></i>
            </div>
        </div>
        <div className="parents2 parents">
            <div className='text'>
                <h1 className="projectTitle">Thunder v2</h1>
                <h4 className='projectTitleDesc'>Terenowy motocykl elektryczny</h4>
                <p lang="en">LEM Thunder v2 jest optymalizacją poprzedzającego go projektu, czyli prototypu elektrycznego motocykla crossowego. Jest to motocykl własnoręcznie wykonany przez studentów Politechniki Wrocławskiej. Został dedykowany osobom pragnącym poczuć emocje towarzyszące rajdom oraz jeździe terenowej. Wziął wielokrotnie udział w międzynarodowych zawodach Smart Moto Challenge, gdzie osiągał wysokie noty w wielu kategoriach. Projekt LEM Thunder v2 to także propozycja dla instytucji państwowych takich jak Straż Graniczna, strzegąca granicy na terenach leśnych i górzystych oraz Straż Parków Narodowych, posiadająca pod opieką ogromne tereny leśne, w których silniki nie są dozwolone. 
                Jednoślad projektu LEM Wrocław jest przeznaczony także do dróg asfaltowych - wymaga jedynie zmiany opon. To klasyfikuje go do użytku w każdych warunkach.
</p>
                <div className="iconsContainer">
                    <div className='iconsProjects'>
                        <h1 className="value"><CountUp end={40} duration={1.5} redraw={true}>{({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}</CountUp> kW</h1>
                        <h4 className="valueIs">Moc</h4>
                    </div>
                    <div className='iconsProjects'>
                        <h1 className="value"><CountUp end={90} duration={1.5} redraw={true}>{({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}</CountUp> km</h1>
                        <h4 className="valueIs">Zasięg</h4>

                    </div>
                    <div className='iconsProjects'>
                        <h1 className="value"><CountUp end={120} duration={1.5} redraw={true}>{({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}</CountUp> km/h</h1>
                        <h4 className="valueIs">Prędkość max.</h4>

                    </div>
                    <div className='iconsProjects'>
                        <h1 className="value"><CountUp end={150} duration={1.5} redraw={true}>{({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}</CountUp> kg</h1>
                        <h4 className="valueIs">Masa</h4>

                    </div>
                    
                </div>
            </div>
            <div className='switchButton'>
                <i className='fa fa-angle-double-right' onClick={switchPictureRight} style={{fontSize:"60px"}}></i>
                <i className='fa fa-angle-double-left' onClick={switchPictureLeft} style={{fontSize:"60px"}}></i>
            </div>
        </div>
        <div className="parents3 parents">
            <div className=' text'>
                <h1 className="projectTitle">LEM SSV</h1>
                <p lang="en">LEM SSV jest pionierskim projektem w szeregach zespołu LEM Wrocław z uwagi na czterokołowy charakter pojazdu. Zakłada on stosowanie w procesie realizacji zasad zero waste oraz dawanie używanym komponentom drugie życie w innowacyjnym, zero emisyjnym projekcie.
LEM SSV to elektryczny pojazd terenowy side by side typu buggy, opierający swoją konstrukcję na ramie podarowanej od firmy Polaris. Wyposażony w napęd 4x4 z możliwością przełączenia na napęd 2x4, LEM SSV będzie w stanie sprostać wyzwaniom zarówno w terenie, jak i na szosie. </p>
                <div className="iconsContainer">
                <div className='iconsProjects'>
                        <h1 className="value"><CountUp end={3} duration={1.5} redraw={true}>{({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}</CountUp> s</h1>
                        <h4 className="valueIs">Przyspieszenie<br/> 0-100 km/h</h4>

                    </div>
                    <div className='iconsProjects'>
                        <h1 className="value"><CountUp end={280} duration={1.5} redraw={true}>{({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}</CountUp> Nm</h1>
                        <h4 className="valueIs">Moment obrotowy</h4>

                    </div>
                    <div className='iconsProjects'>
                        <h1 className="value"><CountUp end={109} duration={1.5} redraw={true}>{({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}</CountUp> kW</h1>
                        <h4 className="valueIs">Moc</h4>
                    </div>
                    
                    <div className='iconsProjects'>
                        <h1 className="value"><CountUp end={90} duration={1.5} redraw={true}>{({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}</CountUp> km</h1>
                        <h4 className="valueIs">Zasięg</h4>

                    </div>
                    
                </div>
            </div>
            <div className='switchButton'>
                <i className='fa fa-angle-double-right' onClick={switchPictureRight} style={{fontSize:"60px"}}></i>
                <i className='fa fa-angle-double-left' onClick={switchPictureLeft} style={{fontSize:"60px"}}></i>
            </div>
        </div>
        </div>
        </> 
    )
}