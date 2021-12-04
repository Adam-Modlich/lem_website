import '../Contact/Contact.scss';
import Nav from '../Nav'
import react from 'react';


export default function Contact(){

    return(
        // <>
        <div className="contact">
            <div className="leftSide">

            </div>
            <div className="rightSide">
                <form>
                    <label for="name"><h2>Name</h2></label>
                    <input type="text" placeholder="Your name..."/>
                    <label for="email" ><h2>Email Adress</h2></label>
                    <input type="text" placeholder="Your email adress..."/>
                    <label for="ph-num" ><h2>Phone Number</h2></label>
                    <input type="text" placeholder="Your phone number..."/>
                </form>
            </div>
        </div>
        // </>
    )
}

