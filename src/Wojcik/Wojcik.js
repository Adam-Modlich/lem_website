import '../Wojcik/Wojcik.scss';
import $ from 'jquery';
import Footer from '../Footer';
import wojcikRace from '../pictures/Wojcik.jpg';

export default function Wojcik(){


return(
    <>
    <div className='wojcikRacePage'>
        <div className='wRContainer'>
            <img src={wojcikRace}></img>
            <div className='wRText'>
                <h1>
                    Współorganizujemy zawody które odbędą się<br/> 27-29 maja 2022 na Torze Poznań.
                </h1>
                    <p>
                        <h3>Wójcik Electric Race</h3> to kategoria Mistrzostw Polski obejmująca konkurencje motocykli elektrycznych dla najlepszych drużyn studenckich z całego świata.
                    </p>
                <p>
                    Podczas trzech dni na torze uczestnicy będą rywalizować w testach dynamicznych, których zwieńczeniem będą dwa wyścigi.
                </p>
            </div>
        
        
        </div>
        
    </div>
    <div className='wREndText'>
            <p>
                Nieocenione doświadczenie sobyliśmy organizując Wrocław Smart Moto Challenge. <br/>Są to międzynarodowe zawody motocykli elektrycznych, w których uczestniczyły<br/> najlepsze zespoły studentów.
            </p>
        </div>
    <Footer/>
    </>)

}