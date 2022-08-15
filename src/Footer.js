import { useLocation } from 'react-router';
import '../src/Footer.scss';
import pwr from '../src/logoPwr.png';


export default function Footer(len){

    return(
        <>
        <footer>
            <div className='contactLeft'>
                <h1 style={{paddingBottom:"10px"}}>{ len.writeToUs }</h1>

                <h3>Michał&nbsp;Skraburski&nbsp;(Team&nbsp;Leader)</h3>
                <h4>skraburski.michal@gmail.com</h4>

                <h3>Iza&nbsp;Stanula&nbsp;(Marketing Leader)</h3>
                <h4>izabellastanula@gmail.com</h4>
            </div>

                <div className='contactRight'> 
                    <div className='icons'>
                        <div className='icon1'>
                            <span><i className='fa fa-phone fa-fw'></i></span>
                            <span className='text'>
                                <h1>{ len.phone}</h1>
                                <p>+48&nbsp;697&nbsp;612&nbsp;009</p>
                            </span>
                        </div>
                        <div className='icon2'>
                            <span><i className='fa fa-map-marker fa-fw'></i></span>
                            <span className='text'>
                                <h1>{ len.adress }</h1>
                                <p>
                                    ul.&nbsp;Smoluchowskiego&nbsp;25 <br/>
                                    50-372 Wrocław
                                </p>
                            </span>
                        </div>
                        
                    </div>
                    <div className='icon3'>
                        <img src={pwr}></img>
                    </div>
                </div>
                <div className='copyrightFooter'>Copyright© 2021 Designed by Adam Modlich +48 500 474 573</div>
        </footer>
        </>
    )
}