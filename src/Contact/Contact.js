import { useLocation } from 'react-router';
import '../Contact/Contact.scss';
// import $ from 'jquery';
import pwr from '../logoPwr.png';
import w10 from '../TrustUs/Sponsors/w10-white.png'


export default function Contact(props){

    return(
        <>
        {props.lan ?
        <div>
        <div className='footer'>
            <div className='contactLeft'>
                <h1 style={{paddingBottom:"10px"}}>{ props.lan.contactUs[0].writeToUs }</h1>

                <h3>Michał&nbsp;Skraburski <br/>(Team Leader)</h3>
                <h4>skraburski.michal@gmail.com</h4>

                <h3>Wiktoria&nbsp;Budziar <br/>(Marketing Leader)</h3>
                <h4>w.budziar@gmail.com</h4>
            </div>

                <div className='contactRight'> 
                    <div className='icons'>
                        <div className='icon'>
                            <span><i className='fa fa-phone fa-fw'></i></span>
                            <span className='text'>
                                <h1>{ props.lan.contactUs[0].phone }</h1>
                                <p>+48&nbsp;697&nbsp;612&nbsp;009</p>
                            </span>
                        </div>
                        <div className='icon'>
                            <span><i className='fa fa-map-marker fa-fw'></i></span>
                            <span className='text'>
                                <h1>{ props.lan.contactUs[0].adress }</h1>
                                <p>
                                    ul.&nbsp;Smoluchowskiego&nbsp;25 <br/>
                                    50-372&nbsp;Wrocław
                                </p>
                            </span>
                        </div>
                        
                    </div>
                </div>
                <div className='icon3'>
                    <img class="pwrImg" src={pwr}></img>
                    <img class="w10Img" src={w10}></img>
                </div>
                <div className='copyright'>Copyright© 2021 Designed by Adam Modlich +48 500 474 573</div>
        </div>
        </div>
        : null}
        </>
    )
}

