import '../Achievements/Achievements.scss';
import Footer from '../Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Achievements(){

    return(
        <>
        <div className='parentContainerProjects'>
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


