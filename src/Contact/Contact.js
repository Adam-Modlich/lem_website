import '../Contact/Contact.scss';
// import $ from 'jquery';
import pwr from '../logoPwr.png';


export default function Contact(){

    // const handleSubmit = () => {

    //     $("input").each(function() {
    //     if ($(this).val() != "") {            
    //         const titleSend = document.getElementById("titleSend");
    //         const titleUnSend = document.getElementById("titleUnSend");

    //         titleSend.style.opacity = "1";
    //         titleUnSend.style.opacity = "0";
    //         setTimeout(handleSubmitGoBack,3000);}
    //     else{
    //         const disabled = document.getElementById("disabled");
    //         const titleUnSend = document.getElementById("titleUnSend");

    //         disabled.style.opacity = "1";
    //         titleUnSend.style.opacity = "0";
    //         setTimeout(handleSubmitGoBack,3000);
    //     }
    //     });
    // }

    // const handleSubmitGoBack = () => {
    //     const titleSend = document.getElementById("titleSend");
    //     const titleUnSend = document.getElementById("titleUnSend");
    //     const disabled = document.getElementById("disabled");

    //     disabled.style.opacity = "0";
    //     titleSend.style.opacity = "0";
    //     titleUnSend.style.opacity = "1";
    // }

    return(
        <>
        <div className='footer'>
            <div className='contactLeft'>
                <h1 style={{paddingBottom:"10px"}}>Napisz do nas</h1>

                <h3>Michał Skraburski (Team Leader)</h3>
                <h4>michal.skraburski@gmail.com</h4>

                <h3>Iza Stanula (Marketing)</h3>
                <h4>iza.stanula@gmail.com</h4>
            </div>

                <div className='contactRight'> 
                    <div className='icons'>
                        <div className='icon1'>
                            <span><i className='fa fa-phone fa-fw'></i></span>
                            <span className='text'>
                                <h1>Telefon</h1>
                                <p>+48 500 474 573</p>
                            </span>
                        </div>
                        <div className='icon2'>
                            <span><i className='fa fa-map-marker fa-fw'></i></span>
                            <span className='text'>
                                <h1>Mail</h1>
                                <p>
                                    ul. Smoluchowskiego 25 <br/>
                                    50-372 Wrocław
                                </p>
                            </span>
                        </div>
                        
                    </div>
                </div>
                <div className='icon3'>
                    <img src={pwr}></img>
                </div>
        </div>
        </>
    )
}

