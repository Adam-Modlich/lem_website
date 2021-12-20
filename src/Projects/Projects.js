import '../Projects/Projects.scss';
import CountUp, { useCountUp } from 'react-countup';
import $ from 'jquery';
import VisibilitySensor from 'react-visibility-sensor';



export default function Projects(){
    
    const switchPictureRight = () => {
        let activeVisible;
        let i = 1;
        for(i; i<4; i++){
            if($(`.parents${(i)}`).css("visibility") == "visible"){
                activeVisible = i;
            }
        }
        
        $(`.parents${(activeVisible)}`).css("visibility", "hidden");
        if(activeVisible == 2){
            $(`.parents3`).css({visibility: "visible"});
            $(`.parents3`).animate({left:0+"px"});
            $(`.parents1`).css({visibility: "hidden"});
            $(`.parents${((activeVisible+2)%3)}`).css({left: $(window).width()});
            $(`.parents${activeVisible}`).css({left: (-1)*$(window).width()});
        }
        else if(activeVisible == 1){
            $(`.parents${((activeVisible+1)%3)}`).css({visibility: "visible"});
            $(`.parents${((activeVisible+1)%3)}`).animate({left:0+"px"});
            $(`.parents3`).css({left: $(window).width()});
            $(`.parents${activeVisible}`).css({left: (-1)*$(window).width()});
            
        }
        else{
            $(`.parents${((activeVisible+2)%3)}`).css({left: $(window).width()});
            $(`.parents${activeVisible}`).css({left: (-1)*$(window).width()});
            $(`.parents1`).animate({left:0+"px"});
            $(`.parents1`).css({visibility: "visible"});
        }      
        
        
    }

    const switchPictureLeft = () => {
        let activeVisible;
        let i = 1;
        for(i; i<4; i++){
            if($(`.parents${(i)}`).css("visibility") == "visible"){
                activeVisible = i;
            }
        }
        
        $(`.parents${(activeVisible)}`).css("visibility", "hidden");
        if(activeVisible == 2){
            $(`.parents1`).css({visibility: "visible"});
            $(`.parents1`).animate({left:0+"px"});
            $(`.parents3`).css({visibility: "hidden"});
            $(`.parents${activeVisible}`).css({left: $(window).width()});
            $(`.parents3`).css({left: (-1)*$(window).width()});
        }
        else if(activeVisible == 1){
            $(`.parents3`).css({visibility: "visible"});
            $(`.parents3`).animate({left:0+"px"});
            $(`.parents1`).css({left: $(window).width()});
            $(`.parents2`).css({left: (-1)*$(window).width()});
            
        }
        else{
            $(`.parents3`).css({left: $(window).width()});
            $(`.parents1`).css({left: (-1)*$(window).width()});
            $(`.parents2`).animate({left:0+"px"});
            $(`.parents2`).css({visibility: "visible"});
        }  

    }


    return(
        <>
        <div className="parents1 parents">
            <div className='text'>
                <h1 className="projectTitle">Photon</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aliquam? Vitae eos incidunt dolorum culpa suscipit tenetur eius, inventore fuga quis, praesentium laborum in mollitia maxime fugit ut, dignissimos officia.</p>
                <div className="iconsContainer">
                    <div className='icons'>
                        <h1 className="value"><CountUp end={3} duration={2.5} redraw={true}>{({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}</CountUp>s</h1>
                        <h4 className="valueIs">Przyspieszenie 0-100 km/h</h4>

                    </div>
                    <div className='icons'>
                        <h1 className="value"><CountUp end={100} duration={2.5} redraw={true}>{({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}</CountUp>W</h1>
                        <h4 className="valueIs">Moc</h4>
                    </div>
                    <div className='icons'>
                        <h1 className="value"><CountUp end={200} duration={2.5} redraw={true}>{({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}</CountUp>km/h</h1>
                        <h4 className="valueIs">Prędkość Maksymalna</h4>

                    </div>
                    <div className='icons'>
                        <h1 className="value"><CountUp end={140} duration={2.5} redraw={true}>{({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}</CountUp>kg</h1>
                        <h4 className="valueIs">Masa</h4>

                    </div>
                    
                </div>
            </div>
            <div className='switchButton'>
                <i className='fa fa-angle-double-right' onClick={switchPictureRight} style={{fontSize:"60px"}}></i>
                <i className='fa fa-angle-double-left' onClick={switchPictureLeft} style={{fontSize:"60px"}}></i>
            </div>
        </div>
        <div className="parents2 parents">
            <div className='text'>
                <h1 className="projectTitle">Thunder</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aliquam? Vitae eos incidunt dolorum culpa suscipit tenetur eius, inventore fuga quis, praesentium laborum in mollitia maxime fugit ut, dignissimos officia.</p>
                <div className="iconsContainer">
                <div className='icons'>
                        <h1 className="value"><CountUp end={3} duration={2.5} redraw={true}>{({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}</CountUp>s</h1>
                        <h4 className="valueIs">Przyspieszenie 0-100 km/h</h4>

                    </div>
                    <div className='icons'>
                        <h1 className="value"><CountUp end={100} duration={2.5} redraw={true}>{({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}</CountUp>W</h1>
                        <h4 className="valueIs">Moc</h4>
                    </div>
                    <div className='icons'>
                        <h1 className="value"><CountUp end={200} duration={2.5} redraw={true}>{({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}</CountUp>km/h</h1>
                        <h4 className="valueIs">Prędkość Maksymalna</h4>

                    </div>
                    <div className='icons'>
                        <h1 className="value"><CountUp end={140} duration={2.5} redraw={true}>{({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}</CountUp>kg</h1>
                        <h4 className="valueIs">Masa</h4>

                    </div>
                    
                </div>
            </div>
            <div className='switchButton'>
                <i className='fa fa-angle-double-right' onClick={switchPictureRight} style={{fontSize:"60px"}}></i>
                <i className='fa fa-angle-double-left' onClick={switchPictureLeft} style={{fontSize:"60px"}}></i>
            </div>
        </div>
        <div className="parents3 parents">
            <div className=' text'>
                <h1 className="projectTitle">LEM SSV</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aliquam? Vitae eos incidunt dolorum culpa suscipit tenetur eius, inventore fuga quis, praesentium laborum in mollitia maxime fugit ut, dignissimos officia.</p>
                <div className="iconsContainer">
                <div className='icons'>
                        <h1 className="value"><CountUp end={3} duration={2.5} redraw={true}>{({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}</CountUp>s</h1>
                        <h4 className="valueIs">Przyspieszenie 0-100 km/h</h4>

                    </div>
                    <div className='icons'>
                        <h1 className="value"><CountUp end={100} duration={2.5} redraw={true}>{({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}</CountUp>W</h1>
                        <h4 className="valueIs">Moc</h4>
                    </div>
                    <div className='icons'>
                        <h1 className="value"><CountUp end={200} duration={2.5} redraw={true}>{({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}</CountUp>km/h</h1>
                        <h4 className="valueIs">Prędkość Maksymalna</h4>

                    </div>
                    <div className='icons'>
                        <h1 className="value"><CountUp end={140} duration={2.5} redraw={true}>{({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}</CountUp>kg</h1>
                        <h4 className="valueIs">Masa</h4>

                    </div>
                    
                </div>
            </div>
            <div className='switchButton'>
                <i className='fa fa-angle-double-right' onClick={switchPictureRight} style={{fontSize:"60px"}}></i>
                <i className='fa fa-angle-double-left' onClick={switchPictureLeft} style={{fontSize:"60px"}}></i>
            </div>
        </div>
        </> 
    )
}