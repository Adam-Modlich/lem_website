import '../AboutUs/aboutUs.scss';

// import elek from '../AboutUs/Departments/R_elektronika.png';
// import prez from '../AboutUs/Departments/R_prezes_koła.png';
// import lider from '../AboutUs/Departments/R_lider_Photon.png';
// import kons from '../AboutUs/Departments/R_konstrukcja.png';
// import mark from '../AboutUs/Departments/R_marketing.png';
// import mech from '../AboutUs/Departments/R_mechanika.png';
// import zaw from '../AboutUs/Departments/R_zawieszenie.png';

// import elekImg from "../AboutUs/Boss/elektro_optimized.jpg"
// import zawImg from "../AboutUs/Boss/zawieszenie_optimized.jpg";
// import markImg from "../AboutUs/Boss/marketing_optimized.jpg";
// import konsImg from "../AboutUs/Boss/konstrukcja_optimized.jpg";
// import mechImg from "../AboutUs/Boss/mechanika_optimized.jpg";
// import prezImg from "../AboutUs/Boss/prezes1_optimized.jpg";
// import liderPhotonImg from "../AboutUs/Boss/photon_lider_optimized.jpg";
// import liderSSVImg from "../AboutUs/Boss/ssv_lider_optimized.jpg";



// import $ from 'jquery';
import Footer from '../Footer';

export default function AboutUs(){

  // let elekTitle = "Elektronika";
  // let elekText = "Dział Elektro zajmuje się złożeniem napędów elektrycznych, tworzonych od podstaw w naszym garażu. Projektujemy i wykonujemy baterię o określonych wymiarach, łączymy ją ze sterownikiem i silnikiem, a następnie kształtujemy charakterystykę napędu poprzez zmianę ustawień sterownika. Ponadto, zajmujemy się tworzeniem całej wiązki elektrycznej, gdzie nasze zadanie obejmuje wyprowadzenie napięcia 12V potrzebnego do działania aparatury sterowniczej, zaprogramowanie wyświetlacza oraz połączenie manetki czy przycisków sterowniczych."
  // let elekName = "Piotr Wyszyński";

  // let prezTitle = "Prezes Koła";
  // let prezText = "góno"
  // let prezName = "Michał Skraburski";

  // let liderTitle = "Lider Photon";
  // let liderText = "góno"

  // let liderTitle2 = "Lider SSV";
  // let liderText2 = "góno"

  // let zawTitle = "Zawieszenie";
  // let zawText = "Dział Zawieszenia koncentruje się na projekcie, budowie oraz regulacji układu jezdnego pojazdu. Fazę projektową zazwyczaj rozpoczyna nasz zespół. Decydujemy jakiego amortyzatora i widelców użyjemy, co poprzedzają analizy kinematyki motocykla, gdzie nadajemy mu wszystkie charakterystyczne punkty i decydujemy jaki będzie miał charakter. "
  // let zawName = "Damian Sazoński";

  // let mechTitle = "Mechanika";
  // let mechText = "Dział Mechaniki zajmuje się projektowaniem oraz wykonaniem układu przeniesienia napędu, układu chłodzenia silnika, ergonomią kierowcy. Wykonujemy zarówno prace warsztatowe, jak i te przygotowawcze do testów czy wyścigów. Naszym celem jest uzyskanie jak najlepszych osiągów na torze z każdym kolejnym projektem.";
  // let mechName = "Albert Iwanicki";

  // let konsTitle = "Konstrukcja";
  // let konsText = "Dział Konstrukcji specjalizuje się we wszelkich konstrukcjach nośnych, obudowach czy mocowaniach. Naszym zadaniem jest projektowanie elementów pod kątem jak największego bezpieczeństwa zarówno naszego kierowcy, jak i wrażliwych komponentów wewnętrznych. Oprócz projektowania oraz modelowania sami wykonujemy nasze części poprzez przygotowanie, spawanie czy gięcie.";
  // let konsName = "Piotr Minta";

  // let markTitle = "Marketing";
  // let markText = "Dział Marketingu to nie tylko media społecznościowe. Nasz dział czuwa podczas zawodów i konkursów, dbając o wizerunek całego zespołu. Jesteśmy tam, gdzie wszystkie targi motocyklowe oraz wszelkiego rodzaju eventy. Dbamy o kontakt zarówno z władzami Politechniki Wrocławskiej, jak i firmami zewnętrznymi, wspierającymi naszą działalność. ";
  // let markName = "Izabela Stanula";


      // const changeText = (title,texty,sourceImg,name) => {
      //   $("#imgPlace").fadeOut("medium", function() {
      //     $('#imgPlace').attr('src', sourceImg);
      //   });
      //   $("#imgPlace").fadeIn("slow");  

      //   $("#beginText").fadeOut("medium", function() {
      //     $('#beginText').text(texty);
      //   });
      //   $("#beginText").fadeIn("slow");  

      //   $("#depAcapit").fadeOut("medium", function() {
      //     $('#depAcapit').text(title);
      //   });
      //   $("#depAcapit").fadeIn("slow"); 

      //   $("#bossName").fadeOut("medium", function() {
      //     $('#bossName').text(name);
      //   });
      //   $("#bossName").fadeIn("slow"); 
      // }

    return(
        <>
        <div className="about">
            <div className="aboutContent">
                <div className="Container_1">
                    <h1> Light Electric Motorcycle </h1>
                      <a><i className="fa fa-angle-double-right"></i></a>
                </div>
                <div className="parent1">
                <div id="section2" className="Container_3">
                    <div className="image_1">

                    </div>
                    <div className="text_1">
                    <h1 className="acapits">Kim Jesteśmy?</h1>
                        <p lang="en">
                            Jesteśmy grupą 50 studentów działających jako Koło Naukowe Pojazdów i&nbsp;Robotów Mobilnych. 
                            Tworzymy projekt Light Electric Motorcycle (LEM Wrocław) pod patronatem Politechniki Wrocławskiej.
                            Projektujemy i&nbsp;budujemy od podstaw motocykle elektryczne, 
                            jednak w&nbsp;tym roku postanowiliśmy stworzyć coś zupełnie nowego, czyli elektryczny pojazd terenowy typu buggy (projekt LEM SSV).
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
                          <p lang="en">
                              Od 2013 - 2019 roku bierzemy udział w&nbsp;międzynarodowych zawodach SmartMoto Challenge. Są to prestiżowe, międzynarodowe zawody motocykli elektrycznych, w&nbsp;których rywalizują ze sobą uczelnie z&nbsp;całego świata. Podczas 7 edycji zdobyliśmy 9 złotych, 5 srebrnych oraz 2 brązowe medale.
                          </p>
                          </div>
                  </div>
                </div>
                {/* <div className="parent3">
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
                          <img src={prez} alt="Zdjęcie Prezesa"></img><h2>Prezes Koła</h2>
                        </div>
                        <div onClick={() => changeText(elekTitle,elekText,elekImg, elekName)} className='elekIcon Icon'>
                          <img src={elek} alt="Zdjęcie Elektronika"></img><h2>Elektronika</h2>
                        </div>
                        <div onClick={() => changeText(konsTitle, konsText,konsImg, konsName)} className='konsIcon Icon'>
                          <img src={kons} alt="Zdjęcie Konstrukcji"></img><h2>Konstrukcja</h2>
                        </div>
                        <div onClick={() => changeText(zawTitle, zawText,zawImg, zawName)} className='zawIcon Icon'>
                          <img src={zaw} alt="Zdjęcie Zawieszenia"></img><h2>Zawieszenie</h2>
                        </div>
                        <div onClick={() => changeText(markTitle, markText,markImg, markName)} className='markIcon Icon'>
                          <img src={mark} alt="Zdjęcie Marketingu"></img><h2>Marketing</h2>
                        </div>
                        <div onClick={() => changeText(mechTitle, mechText,mechImg, mechName)} className='mechIcon Icon'>
                          <img src={mech} alt="Zdjęcie Mechaniki"></img><h2>Mechanika</h2>
                        </div>
                      </div>

                      <div className='departmentsTabletMobile'>
                        <h1>Nasz Zespół</h1>
                        <div className='prezIcon Icon'>
                          <h2>Prezes Koła</h2>
                          <img src={prezImg} alt="Zdjęcie Prezesa"></img>
                        </div>
                        <div className='liderIcon Icon'>
                          <h2>Lider Photon</h2>
                          <img src={liderPhotonImg} alt="Zdjęcie Lidera Photon"></img>
                        </div>
                        <div className='liderIcon Icon'>
                          <h2>Lider SSV</h2>
                          <img src={liderSSVImg} alt="Zdjęcie Lidera SSV"></img>
                        </div>
                        <div className='elekIcon Icon'>
                          <h2>Elektronika</h2>
                          <img src={elekImg} alt="Zdjęcie Elektroniki"></img>
                        </div>
                        <div className='konsIcon Icon'>
                          <h2>Konstrukcja</h2>
                          <img src={konsImg} alt="Zdjęcie Konstrukcji"></img>
                        </div>
                        <div className='zawIcon Icon'>
                          <h2>Zawieszenie</h2>
                          <img src={zawImg} alt="Zdjęcie Zawieszenia"></img>
                        </div>
                        <div className='markIcon Icon'>
                          <h2>Marketing</h2>
                          <img src={markImg} alt="Zdjęcie Marketingu"></img>
                        </div>
                        <div className='mechIcon Icon'>
                          <h2>Mechanika</h2>
                          <img src={mechImg} alt="Zdjęcie Mechaniki"></img>
                        </div>
                      </div>
                    </div>
                </div> */}
                <div className="parent3">
                  <div className="Container_5">
                      <div className="image_7">

                      </div>
                      <div className="text_3">
                      <h1 className="acapits">Nasz Kierowca</h1>
                          <p lang="en">
                          Szeregi projektu LEM Wrocław wspiera utalentowany i&nbsp;młody kierowca, Krzysztof Borys. Dzięki niemu zespół mógł podjąć się realizacji projektu LEM Photon, przy którego realizacji czerpali z&nbsp;jego wiedzy oraz doświadczenia.
                          Kojarzony bardziej pod pseudonimem Mały Kris, swoją przygodę z&nbsp;motocyklami zaczął w&nbsp;wieku 5 lat. Szybko zmieniła się ona w&nbsp;pasję, a&nbsp;wkrótce w&nbsp;życie zawodowe Krisa. Tworzy rodzinną markę MotoKenner oraz oferuje rzetelne szkolenia motocyklowe na swoim torze.
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

