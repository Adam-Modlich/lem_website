import '../AboutUs/aboutUs.scss';
import Nav from '../Nav'
import react from 'react';

import elek from '../AboutUs/Departments/R_elektronika.png';
import komp from '../AboutUs/Departments/R_kompozyty.png';
import kons from '../AboutUs/Departments/R_konstrukcja.png';
import mark from '../AboutUs/Departments/R_marketing.png';
import mech from '../AboutUs/Departments/R_mechanika.png';
import zaw from '../AboutUs/Departments/R_zawieszenie.png';


import $ from 'jquery';
import Footer from '../Footer';


export default function AboutUs(){
          
      $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
        console.log(scrollTop);
        var heightParent1 = $(".parent1").height();
        var heightParent2 = $(".parent2").height();


        $(".Container_3").children().css({
            opacity: function() {
              var elementHeight = $(this).height(),
                opacity = ((1 - (elementHeight - scrollTop) / elementHeight));
              return opacity;
            }
          });
        $(".Container_4").children().css({
          opacity: function() {
            var elementHeights = $(".parent2").height(),
              opacity = ((1 - ((elementHeights+heightParent1) - scrollTop) / elementHeights));
            return opacity;
          }
        });

        $(".Container_5").children().css({
          opacity: function() {
            var elementHeights = $(".parent3").height(),
              opacity = ((1 - ((elementHeights+heightParent1+heightParent2) - scrollTop) / elementHeights));
        
            return opacity;
          }
        });
      });

        // $(".elekIcon").on("click", function(){
        //   $(".beginText").toggle(function()
        //   {
        //     $(this).animate({visibility: "hidden"},500);
        //   },
        //   function(){
        //     $(this).animate({visibility: "visible"},500);
        //   });
        // });

      // const changeTheText = () => {
      //   $(".beginText").children().css("visibility", "hidden");
      //   console.log("1");
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
                  {/* <div className="Container_6">
                      <h1 className="acapits">Składamy się z ...</h1>
                      <div className='parentText_4'>
                        <div className='beginText'>
                        <h1>Nasze Działy</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium quaerat recusandae blanditiis excepturi minima exercitationem corporis porro unde earum, eum error voluptate molestiae cum veniam at aliquam non ad quidem!</p>
                        </div>
                        <div className='childText_4'>
                          <div className='elek'>
                            <h2>Elektronika</h2>
                          </div>
                          <div className='komp'>
                            <h2>Kompozyty</h2>
                          </div>
                          <div className='kons'>
                          <h2>Konstrukcja</h2>
                          </div>
                          <div className='zaw'>
                            <h2>Zawieszenie</h2>
                          </div>
                          <div className='mark'>
                            <h2>Marketing</h2>
                          </div>
                          <div className='mech'>
                            <h2>Mechanika</h2>
                          </div>
                        </div>
                      </div>
                      <div className='departmentsIcons'>
                        <div type="button" className='elekIcon'>
                          <img src={elek}></img><h2>Elektronika</h2>
                        </div>
                        <div className='kompIcon'>
                          <img src={komp}></img><h2>Kompozyty</h2>
                        </div>
                        <div className='konsIcon'>
                          <img src={kons}></img><h2>Konstrukcja</h2>
                        </div>
                        <div className='zawIcon'>
                          <img src={zaw}></img><h2>Zawieszenie</h2>
                        </div>
                        <div className='markIcon'>
                          <img src={mark}></img><h2>Marketing</h2>
                        </div>
                        <div className='mechIcon'>
                          <img src={mech}></img><h2>Mechanika</h2>
                        </div>
                      </div>
                    </div> */}
                </div>
                
            </div> 
        </div>
        <Footer/>
        </>
    )
}

