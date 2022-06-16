import '../LRP/LRP.scss';
import $ from 'jquery';
import Footer from '../Footer';
import Slider from 'react-touch-drag-slider';
import picture1 from './images/Le Mans 2022 - 1 day -23.jpg';
import picture2 from './images/Le Mans 2022 - 2 day -73.jpg';
import picture3 from './images/Le Mans 2022 - 2 day -92.jpg';
import picture4 from './images/Le Mans 2022 - 3 day -188.jpg';
import picture5 from './images/Le Mans 2022 - 3 day -37.jpg';
import picture6 from './images/Le Mans 2022 - 3 day -63.jpg';
import picture7 from './images/Le Mans 2022 - 6 day -2329.jpg';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';


const images = [
    {url: picture1, title: "picture1", text: "Motostudent było wielkim krokiem naprzód, jeśli chodzi o rozwój koła naukowego, do tej pory budowaliśmy motocykle terenowe, ale postanowiliśmy wystartować w zawodach motostudent. Musieliśmy nauczyć się od podstaw jak budować motocykle sportowe, które różnią się praktycznie pod każdym względem od tego co było znane nam do tej pory. Po dwóch latach pracy skonstruowaliśmy pierwszy polski motocykl elektryczny, który zdobył 6 miejsce w zawodach oraz tytuł najlepszej debiutującej drużyny. Sukces ten odbił się echem wśród polskiej społeczności motocyklowej, dzięki czemu zwrócił się do nas Marcin 'Kosa' Kolanowski - manager Teamu LRP Poland*. 19 listopada 2021 przyjechał do nas na garaż, opowiedzieć o zespole, czym się zajmują i zaprosić nas do ich garażu do Warszawy."},
    {url: picture2, title: "picture2", text: "(*LRP Poland - polski zespół ścigający się w pełnym cyklu motocyklowych mistrzostw świata FIM Endurance World Championship @Team LRP Poland). Na pierwszym wyjeździe do stolicy, Kosa pokazał nam motocykl, przedstawił ekipę, nauczył jak robią pit stopy oraz co może się zepsuć w motocyklu podczas wyścigu. Dowiedzieliśmy się, że wraz z Bartłomiejem Lewandowskim chcą odmłodzić zespół i wyszkolić nowych mechaników. Dostaliśmy zaproszenie na kolejny przyjazd."},
    {url: picture3, title: "picture3", text: 'Na następnym, tym razem 2-dniowym wyjeździe, ćwiczyliśmy masę rzeczy, między innymi wymianę amortyzatora, czy pit stopy. Pod koniec wyjazdu Marcin wytypował kilka osób, które chciałyby zabrać na testy motocykla do Hiszpanii. Dowiedzieliśmy się wtedy, że z wielu uczelni w Polsce, które odwiedził, wybrał właśnie nas - członków koła LEM Wrocław. Pierwszy wyjazd na testy był niesamowity, poznaliśmy cały team i kierowców. Był to sprawdzian naszych umiejętności oraz radzenia sobie ze stresem. Chyba udało się go zdać, dlatego, że Kosa zaprosił nas na pretesty do Le Mans.'},
    {url: picture4, title: "picture4", text: 'Tor we Francji jest nieziemski, legendarny, nie da się nie czuć atmosfery wyścigów stojąc w boxie. Według mnie część naszej duszy już na zawsze na nim zostaje. Był to bardzo wymagający wyjazd, wiele się nauczyliśmy i byliśmy gotowi na więcej. Nareszcie przyszedł czas na długo wyczekiwany wyścig- pierwszą rundę 24- godzinnego wyścigu w Le Mans. Cały tydzień przygotowań, testów, kwalifikacji, nieprzespanych nocy, żeby motocykl był jak najlepiej przygotowany na wyścig. Kibice śpiewający Marsyliankę, flagi, race, samoloty, warkot silników, łzy szczęścia, podekscytowanie, nie da się opisać tego wspaniałego uczucia bycia częścią takiego wydarzenia.'},
    {url: picture5, title: "picture5", text: '15:00 Ruszyli. Zaczęło się. Pierwsze 6 godzin minęło w mgnieniu oka, najgorsze zmęczenie przyszło z samego rana, ale udało się, zrobiliśmy to! 23 pit stopy, 801 okrążeń! Nasi kierowcy - Bartłomiej Lewandowski, Dominik Vincon i Stefan Kerschbaumer byli niesamowici! 6 miejsce w klasie EWC i 14 w klasyfikacji generalnej! W maju byliśmy na pretestach w Belgii, bardzo trudny tor w Spa, ale chłopaki dali sobie radę, śpiewająco przygotowali motocykl na drugą rundę mistrzostw świata.'},
    {url: picture6, title: "picture6", text: 'Spa-Francorchamps - tor w górach, w środku lasu, niesamowicie wymagający, mający opinię jednego z najtrudniejszych. Mieliśmy tydzień, żeby się z nim zaznajomić. Tym razem już spokojniejsi, bogatsi o kolejne doświadczenia z toru. Daliśmy z siebie 1000%! Po groźnym wypadku w kwalifikacjach, mocno obolały Bartłomiej Lewandowski był w stanie pokonać podczas wyścigu 40 okrążeń. Pozostałych 450 kółek przejechali na przemian Dominik Vincon i Pepijn Bijsterbosch.'},
    {url: picture7, title: "picture7", text: ' Wyścig był nieprzewidywalny, słońce, deszcz, przerwanie rywalizacji na 2 godziny w niedzielę nad ranem, kiedy jeden z motocykli rozlał olej na mokrej nawierzchni, ale mimo wszystkich przeciwności, kierowcy Teamu LRP Poland ukończyli rywalizację na dziesiątym miejscu w klasyfikacji generalnej oraz dziewiątym w klasie EWC. Gdyby nie LEM Wrocław, nie bylibyśmy częścią zespołu LRP Poland. Dzięki wiedzy zebranej w kole naukowym i naszej pasji mamy szanse spełniać marzenia oraz dobywać wiedzę potrzebną do budowy nowych projektów.'}
]

export default function LRP(){
    
return(
    <>
    <div className="slider">

    <Slider
          onSlideComplete={(i) => {
            console.log('finished dragging, current slide is', i)
          }}
          onSlideStart={(i) => {
            console.log('started dragging on slide', i)
          }}
          activeIndex={0}
          threshHold={100}
          transition={0.5}
          scaleOnDrag={true}

        >
          {images.map(({ url, title, text }, index) => (
            <div className='container_pic_text'>
            <img src={url} key={index} alt={title} />
            <p>{text}</p>
            </div>
          ))}
        </Slider>
    </div>
    <div className='drag'>
        <FaArrowAltCircleLeft/>
        <p>  Przeciągnij  </p>
        < FaArrowAltCircleRight/>
    </div>

        <div className='LRPEndText'>
            <p>
            Motostudent było wielkim krokiem naprzód, jeśli chodzi o rozwój koła naukowego, do tej pory budowaliśmy motocykle terenowe, ale postanowiliśmy wystartować w zawodach motostudent. Musieliśmy nauczyć się od podstaw jak budować motocykle sportowe, które różnią się praktycznie pod każdym względem od tego co było znane nam do tej pory. Po dwóch latach pracy skonstruowaliśmy pierwszy polski motocykl elektryczny, który zdobył 6 miejsce w zawodach oraz tytuł najlepszej debiutującej drużyny. Sukces ten odbił się echem wśród polskiej społeczności motocyklowej, dzięki czemu zwrócił się do nas Marcin "Kosa" Kolanowski - manager
            Teamu LRP Poland*.
            19 listopada 2021 przyjechał do nas na garaż, opowiedzieć o zespole, czym się zajmują i zaprosić nas do ich garażu do Warszawy. <br></br><br></br>

            (*LRP Poland - polski zespół ścigający się w pełnym cyklu motocyklowych mistrzostw świata FIM Endurance World Championship @Team LRP Poland)<br></br><br></br>

            Na pierwszym wyjeździe do stolicy, Kosa pokazał nam motocykl, przedstawił ekipę, nauczył jak robią pit stopy oraz co może się zepsuć w motocyklu podczas wyścigu.
            Dowiedzieliśmy się, że wraz z Bartłomiejem Lewandowskim chcą odmłodzić zespół i wyszkolić nowych mechaników. Dostaliśmy zaproszenie na kolejny przyjazd.<br></br><br></br>

            Na następnym, tym razem 2-dniowym wyjeździe, ćwiczyliśmy masę rzeczy, między innymi wymianę amortyzatora, czy pit stopy. Pod koniec wyjazdu Marcin wytypował kilka osób, które chciałyby zabrać na testy motocykla do Hiszpanii. Dowiedzieliśmy się wtedy, że z wielu uczelni w Polsce, które odwiedził, wybrał właśnie nas - członków koła LEM Wrocław.<br></br><br></br>

            Pierwszy wyjazd na testy był niesamowity, poznaliśmy cały team i kierowców. Był to sprawdzian naszych umiejętności oraz radzenia sobie ze stresem. Chyba udało się go zdać, dlatego, że Kosa zaprosił nas na pretesty do Le Mans. <br></br><br></br>

            Tor we Francji jest nieziemski, legendarny, nie da się nie czuć atmosfery wyścigów stojąc w boxie. Według mnie część naszej duszy już na zawsze na nim zostaje. Był to bardzo wymagający wyjazd, wiele się nauczyliśmy i byliśmy gotowi na więcej.<br></br><br></br>

            Nareszcie przyszedł czas na długo wyczekiwany wyścig- pierwszą rundę 24- godzinnego wyścigu w Le Mans. Cały tydzień przygotowań, testów, kwalifikacji, nieprzespanych nocy, żeby motocykl był jak najlepiej przygotowany na wyścig. 
            Kibice śpiewający Marsyliankę, flagi, race, samoloty, warkot silników, łzy szczęścia, podekscytowanie, nie da się opisać tego wspaniałego uczucia bycia częścią takiego wydarzenia. 15:00 Ruszyli. Zaczęło się. Pierwsze 6 godzin minęło w mgnieniu oka, najgorsze zmęczenie przyszło z samego rana, ale udało się, zrobiliśmy to! 23 pit stopy, 801 okrążeń! Nasi kierowcy - Bartłomiej Lewandowski, Dominik Vincon i Stefan Kerschbaumer byli niesamowici! 6 miejsce w klasie EWC i 14 w klasyfikacji generalnej!<br></br><br></br>

            W maju byliśmy na pretestach w Belgii, bardzo trudny tor w Spa, ale chłopaki dali sobie radę, śpiewająco przygotowali motocykl na drugą rundę mistrzostw świata.<br></br><br></br>

            Spa-Francorchamps - tor w górach, w środku lasu, niesamowicie wymagający, mający opinię jednego z najtrudniejszych. Mieliśmy tydzień, żeby się z nim zaznajomić. Tym razem już spokojniejsi, bogatsi o kolejne doświadczenia z toru. Daliśmy z siebie 1000%!
            Po groźnym wypadku w kwalifikacjach, mocno obolały Bartłomiej Lewandowski był w stanie pokonać podczas wyścigu 40 okrążeń. Pozostałych 450 kółek przejechali na przemian Dominik Vincon i Pepijn Bijsterbosch.
            Wyścig był nieprzewidywalny, słońce, deszcz, przerwanie rywalizacji na 2 godziny w niedzielę nad ranem, kiedy jeden z motocykli rozlał olej na mokrej nawierzchni, ale mimo wszystkich przeciwności, kierowcy Teamu LRP Poland ukończyli rywalizację na dziesiątym miejscu w klasyfikacji generalnej oraz dziewiątym w klasie EWC. <br></br><br></br>

            Gdyby nie LEM Wrocław, nie bylibyśmy częścią zespołu LRP Poland. Dzięki wiedzy zebranej w kole naukowym i naszej pasji mamy szanse spełniać marzenia oraz dobywać wiedzę potrzebną do budowy nowych projektów.<br></br><br></br>
            </p>
        </div>
    <Footer/>
    </>)

}