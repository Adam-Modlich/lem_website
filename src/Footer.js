import '../src/Footer.scss';



export default function Footer(){

    return(
        <>
        <footer>
            <div className='contactLeft'>
                <h1>Contact Us</h1>

                <h3>Michał Skraburski (Team Leader)</h3>
                <h4>michal.skraburski@gmail.com</h4>

                <h3>Iza Stanula (Marketing)</h3>
                <h4>iza.stanula@gmail.com</h4>
            </div>

                <div className='contactRight'> 
                    <div className='icons'>
                        <div>
                            <span><i className='fa fa-phone fa-fw'></i></span>
                            <span className='text'>
                                <h1>Phone</h1>
                                <p>+48 500 474 573</p>
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
                </div>
        </footer>
        </>
    )
}