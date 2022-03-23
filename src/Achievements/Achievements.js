import '../Achievements/Achievements.scss';
import Footer from '../Footer';

export default function Achievements(){

    return(
        <>
        <div className='parentContainerProjects'>
            <div className='box'>
                <h1>PHOTON</h1>
                <h2>Od 2013 w zawodach Smart Moto Challenge zdobyliśmy:</h2>
                <div className='boxy'>

                </div>
                <div className='cups'>
                    <div className='gold cup'><i class="fa fa-trophy" aria-hidden="true"></i>
                        <h2>10x Złoto</h2>
                    </div>
                    <div className='silver cup'><i class="fa fa-trophy" aria-hidden="true"></i>
                        <h2>4x Srebro</h2>
                    </div>
                    <div className='brown cup'><i class="fa fa-trophy" aria-hidden="true"></i>
                        <h2>3x Brąz</h2>
                    </div>
                    <div className='textCups cup'>
                        <h2>Zwycięstwo motocykla LEM Thunder V2
                            w Konkursie Konstrukcji Studenckich, w kategorii Ecology
                        </h2>
                    </div>
                    <div className='textCups cup'>
                        <h2>Wygrana w konkursie EKOinnowatorzy 2019 w kategorii Energia</h2>
                    </div>                
                </div>
            </div>
            <div className='box'>
                <h1>THUNDER V2</h1>
                <h2>Od 2013 w zawodach Smart Moto Challenge zdobyliśmy:</h2>
                <div className='boxy'>

                </div>
                <div className='cups'>
                    <div className='textCups achievements'>
                        <h2>SmartMoto Challenge 2019, Barcelona:</h2>
                        <h4>- Główna nagroda za Design and Brake</h4>
                        <h4>- 2 miejsce w konkurencjach statycznych</h4>
                        <h4>- 2 miejsce w konkurencjach dynamicznych</h4>
                        <h4>- 2 miejsce w klasyfikacji generalnej</h4>
                    </div>
                    <div className='textCups achievements'>
                        <h2>Zwycięstwo motocykla LEM Thunder V2
 w Konkursie Konstrukcji Studenckich, w kategorii Ecology</h2>
                    </div>
                    <div className='textCups achievements'>
                        <h2>Wygrana w konkursie EKOinnowatorzy 2019 w kategorii Energia</h2>
                    </div>
                    {/* <div className='others cup'>sad</div> */}
                </div>
            </div>
            <div className='box'>
                <h1>Nasze Osiągnięcia</h1>
                <h2>Od 2013 w zawodach Smart Moto Challenge zdobyliśmy:</h2>
                <div className='boxy'>

                </div>
                <div className='cups'>
                    <div className='gold cup'><i class="fa fa-trophy" aria-hidden="true"></i>
                        <h2>10x Złoto</h2>
                    </div>
                    <div className='silver cup'><i class="fa fa-trophy" aria-hidden="true"></i>
                        <h2>4x Srebro</h2>
                    </div>
                    <div className='brown cup'><i class="fa fa-trophy" aria-hidden="true"></i>
                        <h2>3x Brąz</h2>
                    </div>
                    {/* <div className='others cup'>sad</div> */}
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}


