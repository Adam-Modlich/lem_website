import '../AboutUs/aboutUs.scss';
import { useState } from 'react';
import tło from '../pictures/tłov7.jpg'
import tłod from '../pictures/tłov7d.jpg'
import tłor from '../pictures/tłov7r.jpg'
import tłop from '../pictures/tłov7p.jpg'
import tłob from '../pictures/tłov7b.jpg'

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

  const [departments, setDepartments] = useState([
    { title: "Prezes Koła",styleT: "row-reverse",styleTA: "right", styleB: `url(${tłor})`, text: "Posiada kilkuletnie doświadczenie w pracy w wielu działach oraz umiejętność zarządzania zespołem. Jest przedstawicielem naszej organizacji zarówno w sferze uczelnianej, jak i w kontaktach z przedsiębiorstwami wspierającymi działalności studenckie. Przez koła naukowego dba o jego rozwój, zgłaszając organizację do udziału w międzynarodowych zawodach. Do jego obowiązków należy nadzór prac liderów poszczególnych działów oraz kontrola wszystkich projektów.", name: "Michał Skraburski", img: prezImg, id: 1},
    // { title: "Lider Photon", text: "góno", name: "", img: liderPhotonImg, id: 2},
    // { title: "Lider SSV", text: "góno", name: "", img: liderSSVImg, id: 3},
    { title: "Elektronika",styleT: "row",styleTA: "left",styleB: `url(${tłod})`, text: "Dział Elektro zajmuje się złożeniem napędów elektrycznych, tworzonych od podstaw w naszym garażu. Projektujemy i wykonujemy baterię o określonych wymiarach, łączymy ją ze sterownikiem i silnikiem, a następnie kształtujemy charakterystykę napędu poprzez zmianę ustawień sterownika. Ponadto, zajmujemy się tworzeniem całej wiązki elektrycznej, gdzie nasze zadanie obejmuje wyprowadzenie napięcia 12V potrzebnego do działania aparatury sterowniczej, zaprogramowanie wyświetlacza oraz połączenie manetki czy przycisków sterowniczych.", name: "Piotr Wyszyński", img: elekImg, id: 4},
    { title: "Marketing",styleT: "row-reverse",styleTA: "right",styleB: `url(${tłob})`, text: "Dział Marketingu to nie tylko media społecznościowe. Nasz dział czuwa podczas zawodów i konkursów, dbając o wizerunek całego zespołu. Jesteśmy tam, gdzie wszystkie targi motocyklowe oraz wszelkiego rodzaju eventy. Dbamy o kontakt zarówno z władzami Politechniki Wrocławskiej, jak i firmami zewnętrznymi, wspierającymi naszą działalność. ", name: "Izabela Stanula", img: markImg, id: 8},
    { title: "Zawieszenie",styleT: "row",styleTA: "left",styleB: `url(${tłod})`, text: "Dział Zawieszenia koncentruje się na projekcie, budowie oraz regulacji układu jezdnego pojazdu. Fazę projektową zazwyczaj rozpoczyna nasz zespół. Decydujemy jakiego amortyzatora i widelców użyjemy, co poprzedzają analizy kinematyki motocykla, gdzie nadajemy mu wszystkie charakterystyczne punkty i decydujemy jaki będzie miał charakter. ", name: "Damian Sazoński", img: zawImg, id: 5},
    { title: "Konstrukcja",styleT: "row-reverse",styleTA: "right",styleB: `url(${tłop})`, text: "Dział Konstrukcji specjalizuje się we wszelkich konstrukcjach nośnych, obudowach czy mocowaniach. Naszym zadaniem jest projektowanie elementów pod kątem jak największego bezpieczeństwa zarówno naszego kierowcy, jak i wrażliwych komponentów wewnętrznych. Oprócz projektowania oraz modelowania sami wykonujemy nasze części poprzez przygotowanie, spawanie czy gięcie.", name: "Piotr Minta", img: konsImg, id: 7},
    { title: "Mechanika",styleT: "row",styleTA: "left",styleB: `url(${tłod})`, text: "Dział Mechaniki zajmuje się projektowaniem oraz wykonaniem układu przeniesienia napędu, układu chłodzenia silnika, ergonomią kierowcy. Wykonujemy zarówno prace warsztatowe, jak i te przygotowawcze do testów czy wyścigów. Naszym celem jest uzyskanie jak najlepszych osiągów na torze z każdym kolejnym projektem.", name: "Albert Iwanicki", img: mechImg, id: 6},
    
  ])

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
                          Nasz zespół głównie skupia się na przygotowaniach do międzynarodowych zawodów motocykli elektrycznych. Można nas spotkać na targach oraz eventach motocyklowych. Odwiedzamy różne tory, gdzie testujemy nasze projekty.  Prężnie się rozwijamy, biorąc udział w&nbsp;innych konkursach zarówno lokalnych, jak i&nbsp;zagranicznych. Działamy także charytatywnie.                          
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
                </div> */}
                {/* <div className="parent3">
                    <div className="Container_6">
                      <div className='parentText_4'>
                      <h1 className='acapits'>Nasz Zespół</h1>
                      {departments.map((dep) => (
                        <div className='departmentsText' key={dep.id} style={{flexDirection: dep.styleT, textAlign: dep.styleTA, backgroundImage: dep.styleB }} >
                          <div className='depText'>
                            <h1 className="acapits" id="depAcapit" style={{textAlign: dep.styleTA}}>{dep.title}</h1>
                              <div className='textContentBoss'>
                                <h2 id="bossName">{dep.name}</h2>
                                <p id='beginText'>{dep.text}</p>
                              </div>
                          </div>
                          <img src={dep.img} id="imgPlace"></img>
                        </div>))}
                      </div>

                      <div className='departmentsTabletMobile'>
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

