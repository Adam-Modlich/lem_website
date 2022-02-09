import '../AboutUs/aboutUs.scss';

import elek from '../AboutUs/Departments/R_elektronika.png';
import prez from '../AboutUs/Departments/R_prezes_koła.png';
import lider from '../AboutUs/Departments/R_lider_Photon.png';
import kons from '../AboutUs/Departments/R_konstrukcja.png';
import mark from '../AboutUs/Departments/R_marketing.png';
import mech from '../AboutUs/Departments/R_mechanika.png';
import zaw from '../AboutUs/Departments/R_zawieszenie.png';

import elekImg from "../AboutUs/Boss/elektro_optimized.jpg"
import zawImg from "../AboutUs/Boss/zawieszenie_optimized.jpg";
import markImg from "../AboutUs/Boss/marketing_optimized.jpg";
import konsImg from "../AboutUs/Boss/konstrukcja_optimized.jpg";
import mechImg from "../AboutUs/Boss/mechanika_optimized.jpg";
import prezImg from "../AboutUs/Boss/prezes1_optimized.jpg";
import liderPhotonImg from "../AboutUs/Boss/photon_lider_optimized.jpg";
import liderSSVImg from "../AboutUs/Boss/ssv_lider_optimized.jpg";



import $ from 'jquery';
import Footer from '../Footer';

export default function AboutUs(){

  let elekTitle = "Elektronika";
  let elekText = "Spoke as as other again ye. Hard on to roof he drew. So sell side ye in mr evil. Longer waited mr of nature seemed. Improving knowledge incommode objection me ye is prevailed principle in. Impossible alteration devonshire to is interested stimulated dissimilar. To matter esteem polite do if."
  let elekName = "Piotr Wyszyński";

  let prezTitle = "Prezes Koła";
  let prezText = "góno"
  let prezName = "Michał Skraburski";

  // let liderTitle = "Lider Photon";
  // let liderText = "góno"

  // let liderTitle2 = "Lider SSV";
  // let liderText2 = "góno"

  let zawTitle = "Zawieszenie";
  let zawText = "góno"
  let zawName = "Damian Sazoński";

  let mechTitle = "Mechanika";
  let mechText = "góno";
  let mechName = "Albert Iwanicki";

  let konsTitle = "Konstrukcja";
  let konsText = "góno";
  let konsName = "Piotr Minta";

  let markTitle = "Marketing";
  let markText = "góno";
  let markName = "Izabela Stanula";


      const changeText = (title,texty,sourceImg,name) => {
        $("#imgPlace").fadeOut("medium", function() {
          $('#imgPlace').attr('src', sourceImg);
        });
        $("#imgPlace").fadeIn("slow");  

        $("#beginText").fadeOut("medium", function() {
          $('#beginText').text(texty);
        });
        $("#beginText").fadeIn("slow");  

        $("#depAcapit").fadeOut("medium", function() {
          $('#depAcapit').text(title);
        });
        $("#depAcapit").fadeIn("slow"); 

        $("#bossName").fadeOut("medium", function() {
          $('#bossName').text(name);
        });
        $("#bossName").fadeIn("slow"); 
      }

      // const changeTextLiders = (title, title2, texty, texty2 ,sourceImg1, sourceImg2) => {
      //   document.getElementById('beginText2').style.display = "block";
      //   document.getElementById('depAcapit2').style.display = "block";
      //   document.getElementById('imgPlace2').style.display = "block";
      //   document.getElementsByClassName('depText2')[0].style.display = "block";

      //   document.getElementById('beginText').textContent = texty;
      //   document.getElementById('beginText2').textContent = texty2;
      //   document.getElementById('depAcapit').textContent = title;
      //   document.getElementById('depAcapit2').textContent = title2;
      //   // document.getElementById('firstAcapit').style.display = "none";

      //   document.getElementById('imgPlace').src = sourceImg1;
      //   document.getElementById('imgPlace2').src = sourceImg2;
      //   $('.depText').css("width","25%")
      //   // $(".parentText_4").animate({height:"55vh"});
      // }

    return(
        <>
        <div className="about">
            <div className="aboutContent">
                <div className="Container_1">
                    <h1> Light Electronic Motorcycle </h1>
                        <a href="#section2"><i className="fa fa-angle-double-right"></i></a>
                </div>
                <div className="parent1">
                <div id="section2" className="Container_3">
                    <div className="image_1">

                    </div>
                    <div className="text_1">
                    <h1 className="acapits">Kim Jesteśmy?</h1>
                        <p>
                            Jesteśmy grupą 50 studentów działających jako Koło Naukowe Pojazdów i Robotów Mobilnych. 
                            Tworzymy projekt Light Electric Motorcycle (LEM Wrocław) pod patronatem Politechniki Wrocławskiej. <br />
                            Projektujemy i budujemy od podstaw motocykle elektryczne, 
                            jednak w tym roku postanowiliśmy stworzyć coś zupełnie nowego, czyli elektryczny pojazd terenowy typu buggy (projekt LEM SSV).
                        </p>
                    </div>
                </div>
                </div>
                <div className="parent2">
                  <div className="Container_4">
                      <div className="image_2">

                      </div>
                      <div className="text_2">
                      <h1 className="acapits">Co Robimy?</h1>
                          <p>
                              Od 2013 roku bierzemy udział w międzynarodowych zawodach SmartMoto Challenge. Są to prestiżowe, międzynarodowe zawody motocykli elektrycznych, w których rywalizują ze sobą uczelnie z całego świata. Podczas 7 edycji zdobyliśmy 9 złotych, 5 srebrnych oraz 2 brązowe medale.
                          </p>
                          </div>
                  </div>
                </div>
                <div className="parent3">
                  <div className="Container_5">
                      <div className="image_3">

                      </div>
                      <div className="text_3">
                      <h1 className="acapits">Co w tym Roku?</h1>
                          <p>
                              W tym roku stworzyliśmy motocykl wyścigowy (LEM Photon), z którym pojechaliśmy na zawody MotoStudent (najbardziej prestiżowe zawody motocyklowe dla studentów na świecie, odpowiednik MotoGP). Dzięki pracy całego zespołu zdobyliśmy 1 miejsce w kategorii Best Rookie Team. 
                          </p>
                      </div>
                  </div>
                </div>
                <div className="parent3">
                  <div className="Container_6">
                      <div className='parentText_4'>
                      {/* <h1 className="acapits" id="firstAcapit"></h1> */}
                        <div className='departmentsText'>
                          <div className='depText'>
                            <h1 className="acapits" id="depAcapit">Prezes Koła</h1>
                              <div className='textContentBoss'>
                                <h2 id="bossName">Michał skraburski</h2>
                                <p id='beginText'>
                                  
                                </p>
                              </div>
                          </div>
                          <img src={prezImg} id="imgPlace"></img>
                          <div className='depText2'>
                            <h1 className="acapits" id="depAcapit2"></h1>
                              <p id='beginText2'>
                              </p>
                          </div>
                          <img src="" id="imgPlace2"></img>
                        </div>
                      </div>
                      <div className='departmentsIcons'>
                        <div onClick={() => changeText(prezTitle, prezText, prezImg, prezName)} className='prezIcon Icon'>
                          <img src={prez}></img><h2>Prezes Koła</h2>
                        </div>
                        {/* <div onClick={() => changeTextLiders(liderTitle,liderTitle2, liderText, liderText2,liderPhotonImg, liderSSVImg)} className='liderIcon'>
                          <img src={lider}></img><h2>Liderzy</h2>
                        </div> */}
                        <div onClick={() => changeText(elekTitle,elekText,elekImg, elekName)} className='elekIcon Icon'>
                          <img src={elek}></img><h2>Elektronika</h2>
                        </div>
                        <div onClick={() => changeText(konsTitle, konsText,konsImg, konsName)} className='konsIcon Icon'>
                          <img src={kons}></img><h2>Konstrukcja</h2>
                        </div>
                        <div onClick={() => changeText(zawTitle, zawText,zawImg, zawName)} className='zawIcon Icon'>
                          <img src={zaw}></img><h2>Zawieszenie</h2>
                        </div>
                        <div onClick={() => changeText(markTitle, markText,markImg, markName)} className='markIcon Icon'>
                          <img src={mark}></img><h2>Marketing</h2>
                        </div>
                        <div onClick={() => changeText(mechTitle, mechText,mechImg, mechName)} className='mechIcon Icon'>
                          <img src={mech}></img><h2>Mechanika</h2>
                        </div>
                      </div>

                      <div className='departmentsTabletMobile'>
                        <h1>Nasz Zespół</h1>
                        <div className='prezIcon Icon'>
                          <h2>Prezes Koła</h2>
                          <img src={prezImg}></img>
                        </div>
                        <div className='liderIcon Icon'>
                          <h2>Lider Photon</h2>
                          <img src={liderPhotonImg}></img>
                        </div>
                        <div className='liderIcon Icon'>
                          <h2>Lider SSV</h2>
                          <img src={liderSSVImg}></img>
                        </div>
                        <div className='elekIcon Icon'>
                          <h2>Elektronika</h2>
                          <img src={elekImg}></img>
                        </div>
                        <div className='konsIcon Icon'>
                          <h2>Konstrukcja</h2>
                          <img src={konsImg}></img>
                        </div>
                        <div className='zawIcon Icon'>
                          <h2>Zawieszenie</h2>
                          <img src={zawImg}></img>
                        </div>
                        <div className='markIcon Icon'>
                          <h2>Marketing</h2>
                          <img src={markImg}></img>
                        </div>
                        <div className='mechIcon Icon'>
                          <h2>Mechanika</h2>
                          <img src={mechImg}></img>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="parent3">
                  <div className="Container_5">
                      <div className="image_7">

                      </div>
                      <div className="text_3">
                      <h1 className="acapits">Nasz Kierowca</h1>
                          <p>
                              W tym roku stworzyliśmy motocykl wyścigowy (LEM Photon), z którym pojechaliśmy na zawody MotoStudent (najbardziej prestiżowe zawody motocyklowe dla studentów na świecie, odpowiednik MotoGP). Dzięki pracy całego zespołu zdobyliśmy 1 miejsce w kategorii Best Rookie Team. 
                          </p>
                      </div>
                  </div>
                </div>
                
            </div> 
        </div>
        <Footer/>
        </>
    )
}

