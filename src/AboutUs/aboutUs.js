import '../AboutUs/aboutUs.scss';
import Nav from '../Nav'
import react from 'react';


export default function AboutUs(){

    return(
        // <>
        <div className="about">
            <div className="aboutContent">
                <div className="Container_1">

                </div>
                <div className="Container_2">
                    <h1><i className="arrow"></i></h1>
                </div>
                <div className="Container_3">
                    <div className="image_1">

                    </div>
                    <div className="text_1">
                    <h1 className="acapits">Kim Jesteśmy?</h1>
                        <p>
                            Jesteśmy grupą 50 studentów działających jako Koło Naukowe Pojazdów i Robotów Mobilnych. 
                            Tworzymy projekt Light Electric Motorcycle (LEM Wrocław) pod patronatem Politechniki Wrocławskiej. 
                            Projektujemy i budujemy od podstaw motocykle elektryczne, 
                            jednak w tym roku postanowiliśmy stworzyć coś zupełnie nowego, czyli elektryczny pojazd terenowy typu buggy (projekt LEM SSV).
                        </p>
                    </div>
                </div>
                <div className="Container_4">
                    <div className="image_2">

                    </div>
                    <div className="text_1">
                    <h1 className="acapits">Co Robimy?</h1>
                        <p>
                            Od 2013 roku bierzemy udział w międzynarodowych zawodach SmartMoto Challenge. Są to prestiżowe, międzynarodowe zawody motocykli elektrycznych, w których rywalizują ze sobą uczelnie z całego świata. Podczas 7 edycji zdobyliśmy 9 złotych, 5 srebrnych oraz 2 brązowe medale.
                        </p>
                        </div>
                </div>
                <div className="Container_5">
                    <div className="image_3">

                    </div>
                    <div className="text_1">
                    <h1 className="acapits">Co w tym Roku?</h1>
                        <p>
                            W tym roku stworzyliśmy motocykl wyścigowy (LEM Photon), z którym pojechaliśmy na zawody MotoStudent (najbardziej prestiżowe zawody motocyklowe dla studentów na świecie, odpowiednik MotoGP). Dzięki pracy całego zespołu zdobyliśmy 1 miejsce w kategorii Best Rookie Team. 
                        </p>
                    </div>
                </div>
                <div className="Container_6">
                    
                </div>
            </div> 
        </div>
        // </>
    )
}

