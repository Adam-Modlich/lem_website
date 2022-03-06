import '../src/Footer.scss';
import pwr from '../src/logoPwr.png';


export default function Footer(){

    return(
        <>
        <footer>
            <div className='contactLeft'>
                <h1 style={{paddingBottom:"10px"}}>Skontaktuj się <br/> z nami</h1>

                <h3>Michał&nbsp;Skraburski&nbsp;(Team&nbsp;Leader)</h3>
                <h4>michal.skraburski@gmail.com</h4>

                <h3>Iza&nbsp;Stanula&nbsp;(Marketing)</h3>
                <h4>iza.stanula@gmail.com</h4>
            </div>

                <div className='contactRight'> 
                    <div className='icons'>
                        <div className='icon1'>
                            <span><i className='fa fa-phone fa-fw'></i></span>
                            <span className='text'>
                                <h1>Telefon</h1>
                                <p>+48&nbsp;500&nbsp;474&nbsp;573</p>
                            </span>
                        </div>
                        <div className='icon2'>
                            <span><i className='fa fa-map-marker fa-fw'></i></span>
                            <span className='text'>
                                <h1>Mail</h1>
                                <p>
                                    ul.&nbsp;Smoluchowskiego&nbsp;25 <br/>
                                    50-372 Wrocław
                                </p>
                            </span>
                        </div>
                        
                    </div>
                    <div className='icon3'>
                        <img src={pwr}></img>
                        {/* <img src={pwrv2}></img> */}
                    </div>
                </div>
        </footer>
        </>
    )
}