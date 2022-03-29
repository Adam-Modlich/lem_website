import '../Contact/Contact.scss';
// import $ from 'jquery';
import pwr from '../logoPwr.png';


export default function Contact(){

    return(
        <>
        <div className='footer'>
            <div className='contactLeft'>
                <h1 style={{paddingBottom:"10px"}}>Napisz do nas</h1>

                <h3>Michał&nbsp;Skraburski <br/>(Team Leader)</h3>
                <h4>skraburski.michal@gmail.com</h4>

                <h3>Iza&nbsp;Stanula <br/>(Marketing Leader)</h3>
                <h4>izabellastanula@gmail.com</h4>
            </div>

                <div className='contactRight'> 
                    <div className='icons'>
                        <div className='icon'>
                            <span><i className='fa fa-phone fa-fw'></i></span>
                            <span className='text'>
                                <h1>Telefon</h1>
                                <p>+48&nbsp;697&nbsp;612&nbsp;009</p>
                            </span>
                        </div>
                        <div className='icon'>
                            <span><i className='fa fa-map-marker fa-fw'></i></span>
                            <span className='text'>
                                <h1>Adres</h1>
                                <p>
                                    ul.&nbsp;Smoluchowskiego&nbsp;25 <br/>
                                    50-372&nbsp;Wrocław
                                </p>
                            </span>
                        </div>
                        
                    </div>
                </div>
                <div className='icon3'>
                    <img src={pwr}></img>
                </div>
                <div className='copyright'>Copyright© 2021 Designed by Adam Modlich +48 500 474 573</div>
        </div>
        </>
    )
}

