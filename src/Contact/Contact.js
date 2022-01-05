import '../Contact/Contact.scss';
import $ from 'jquery';


export default function Contact(){

    const handleSubmit = () => {

        $("input").each(function() {
        if ($(this).val() != "") {            
            const titleSend = document.getElementById("titleSend");
            const titleUnSend = document.getElementById("titleUnSend");

            titleSend.style.opacity = "1";
            titleUnSend.style.opacity = "0";
            setTimeout(handleSubmitGoBack,3000);}
        else{
            const disabled = document.getElementById("disabled");
            const titleUnSend = document.getElementById("titleUnSend");

            disabled.style.opacity = "1";
            titleUnSend.style.opacity = "0";
            setTimeout(handleSubmitGoBack,3000);
        }
        });
    }

    const handleSubmitGoBack = () => {
        const titleSend = document.getElementById("titleSend");
        const titleUnSend = document.getElementById("titleUnSend");
        const disabled = document.getElementById("disabled");

        disabled.style.opacity = "0";
        titleSend.style.opacity = "0";
        titleUnSend.style.opacity = "1";
    }

    return(
        <>
        <div className="contact">
            <div className="leftSide">
                <div className='icons'>
                    <div>
                        <span><i className='fa fa-phone fa-fw'></i></span>
                        <span className='text'>
                            <h1>Phone</h1>
                            <p>+48 500 474 573</p>
                        </span>
                    </div>
                    <div>
                        <span><i className='fa fa-envelope-o fa-fw'></i></span>
                        <span className='text'>
                            <h1>Email</h1>
                            <p>lem.wrocław@gmail.com</p>
                        </span>
                    </div>
                    <div>
                        <span><i className='fa fa-map-marker fa-fw'></i></span>
                        <span className='text'>
                            <h1>Address</h1>
                            <p>
                                ul. Smoluchowskiego 25 <br/>
                                50-372 Wrocław
                            </p>
                        </span>
                    </div>
                </div>
                {/* <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10018.074566286126!2d17.0656596!3d51.1173408!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1886eb15a4703cc6!2sKo%C5%82o%20Naukowe%20Pojazd%C3%B3w%20i%20Robot%C3%B3w%20Mobilnych%20Politechniki%20Wroc%C5%82awskiej!5e0!3m2!1spl!2spl!4v1639130454720!5m2!1spl!2spl" width="100%" height="100%"  allowfullscreen="" loading="lazy"></iframe>                
                </div> */}
            </div>
            <div className="rightSide">
                <form action="https://formsubmit.co/adam.modlich13@gmail.com" method='post'>
                    
                    <div>
                        <label for="name"><h2>Name</h2></label>
                        <input type="text" name="name" required placeholder="Your name..."/>
                    </div>
                    <div>
                        <label for="email"><h2>Email Adress</h2></label>
                        <input type="email" name="email" required placeholder="Your email adress..."/>
                    </div>
                    <div>
                        <label for="ph-num"><h2>Type your Message ...</h2></label>
                        <input type="message" name="message" required placeholder="Message..."/>
                    </div>
                    <div>
                        <button className='submitButton' type="button" type="submit" value="Send" onClick={handleSubmit}>
                            <div className='title'>
                                <h1 id='titleSend'>Thank you</h1>
                                <h1 id='titleUnSend'>Send Us A Message</h1>
                                <h1 id='disabled'>Fill in the field</h1>
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

