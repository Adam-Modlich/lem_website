import '../Projects/Projects.scss';
import CountUp, { useCountUp } from 'react-countup';
import $ from 'jquery';
import VisibilitySensor from 'react-visibility-sensor';
import { useLocation } from 'react-router';

export default function Projects(props){

    const switchPictureRight = (number) => {
        let activeVisible;
        let i = 0;
        for(i; i<4; i++){
            if($(`.parents${(i)}`).css("visibility") == "visible"){
                activeVisible = i;
            }
        }
        $(`.parents${(activeVisible)}`).css("visibility", "hidden");
        $(`.parents${((activeVisible+1+number)%3)}`).animate({left:0+"px"});
        $(`.parents${((activeVisible+1+number)%3)}`).css({visibility: "visible"});
        $(`.parents${((activeVisible+2+number)%3)}`).css({left: $(window).width()});    
        $(`.parents${((activeVisible+number)%3)}`).css({left: (-1)*$(window).width()});
    }

    return(
        <>
        {props.lan ?
        <div>
            <div className='pageContainer'>
            <div className="parents0 parents">
                <div className='text'>
                    <h1 className="projectTitle">{ props.lan.projects[0].header}</h1>
                    <h4 className='projectTitleDesc'>{ props.lan.projects[0].subHeader}</h4>
                    <p lang="en">
                        { props.lan.projects[0].paragraph}
                    </p>
                    <div className="iconsContainer">
                        <div className='iconsProjects'>
                            <h1 className="value"><CountUp end={42} duration={1.5} redraw={false}>{({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}</CountUp> { props.lan.projects[0].data[0].value}</h1>
                            <h4 className="valueIs">{ props.lan.projects[0].data[0].text}</h4>
                        </div>
                        <div className='iconsProjects'>
                            <h1 className="value"><CountUp end={200} duration={1.5} redraw={false}>{({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}</CountUp> { props.lan.projects[0].data[1].value}</h1>
                            <h4 className="valueIs">{ props.lan.projects[0].data[1].text}</h4>

                        </div>
                        <div className='iconsProjects'>
                            <h1 className="value"><CountUp end={140} duration={1.5} redraw={false}>{({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}</CountUp> { props.lan.projects[0].data[2].value}</h1>
                            <h4 className="valueIs">{ props.lan.projects[0].data[2].text}</h4>

                        </div>
                        <div className='iconsProjects'>
                            <h1 className="value"><CountUp end={90} duration={1.5} redraw={false}>{({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}</CountUp> { props.lan.projects[0].data[3].value}</h1>
                            <h4 className="valueIs">{ props.lan.projects[0].data[3].text}</h4>

                        </div>
                    </div>
                </div>
                <div className='switchButton'>
                    <i className='fa fa-angle-double-right' onClick={() => switchPictureRight(0)} style={{fontSize:"60px"}}></i>
                    <i className='fa fa-angle-double-left' onClick={() => switchPictureRight(1)} style={{fontSize:"60px"}}></i>
                </div>
            </div>
            <div className="parents1 parents">
                <div className='text'>
                    <h1 className="projectTitle">Thunder v2</h1>
                    <h4 className='projectTitleDesc'>{ props.lan.projects[1].subHeader}</h4>
                    <p lang="en">
                        { props.lan.projects[1].paragraph}
                    </p>
                    <div className="iconsContainer">
                        <div className='iconsProjects'>
                            <h1 className="value"><CountUp end={30} duration={1.5} redraw={true}>{({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}</CountUp> { props.lan.projects[1].data[0].value}</h1>
                            <h4 className="valueIs">{ props.lan.projects[1].data[0].text}</h4>
                        </div>
                        <div className='iconsProjects'>
                            <h1 className="value"><CountUp end={90} duration={1.5} redraw={true}>{({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}</CountUp> { props.lan.projects[1].data[1].value}</h1>
                            <h4 className="valueIs">{ props.lan.projects[1].data[1].text}</h4>

                        </div>
                        <div className='iconsProjects'>
                            <h1 className="value"><CountUp end={120} duration={1.5} redraw={true}>{({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}</CountUp> { props.lan.projects[1].data[2].value}</h1>
                            <h4 className="valueIs">{ props.lan.projects[1].data[2].text}</h4>

                        </div>
                        <div className='iconsProjects'>
                            <h1 className="value"><CountUp end={150} duration={1.5} redraw={true}>{({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}</CountUp> { props.lan.projects[1].data[3].value}</h1>
                            <h4 className="valueIs">{ props.lan.projects[1].data[3].text}</h4>

                        </div>
                        
                    </div>
                </div>
                <div className='switchButton'>
                    <i className='fa fa-angle-double-right' onClick={() => switchPictureRight(0)} style={{fontSize:"60px"}}></i>
                    <i className='fa fa-angle-double-left' onClick={() => switchPictureRight(1)} style={{fontSize:"60px"}}></i>
                </div>
            </div>
            <div className="parents2 parents">
                <div className=' text'>
                    <h1 className="projectTitle">LEM SSV</h1>
                    <h4 className='projectTitleDesc'>{ props.lan.projects[2].subHeader}</h4>
                    <p lang="en">
                        { props.lan.projects[2].paragraph}
                    </p>
                    <div className="iconsContainer">
                    <div className='iconsProjects'>
                            <h1 className="value"><CountUp end={5} duration={1.5} redraw={true}>{({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}</CountUp> { props.lan.projects[2].data[0].value}</h1>
                            <h4 className="valueIs">{ props.lan.projects[2].data[0].text}</h4>

                        </div>
                        <div className='iconsProjects'>
                            <h1 className="value"><CountUp end={280} duration={1.5} redraw={true}>{({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}</CountUp> { props.lan.projects[2].data[1].value}</h1>
                            <h4 className="valueIs">{ props.lan.projects[2].data[1].text}</h4>

                        </div>
                        <div className='iconsProjects'>
                            <h1 className="value"><CountUp end={80} duration={1.5} redraw={true}>{({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}</CountUp> { props.lan.projects[2].data[2].value}</h1>
                            <h4 className="valueIs">{ props.lan.projects[2].data[2].text}</h4>
                        </div>
                        
                        <div className='iconsProjects'>
                            <h1 className="value"><CountUp end={109} duration={1.5} redraw={true}>{({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}</CountUp> { props.lan.projects[2].data[3].value}</h1>
                            <h4 className="valueIs">{ props.lan.projects[2].data[3].text}</h4>

                        </div>
                        
                    </div>
                </div>
                <div className='switchButton'>
                    <i className='fa fa-angle-double-right' onClick={() => switchPictureRight(0)} style={{fontSize:"60px"}}></i>
                    <i className='fa fa-angle-double-left' onClick={() => switchPictureRight(1)} style={{fontSize:"60px"}}></i>
                </div>
            </div>
            </div>
        </div>
        : null }
        </> 
    )
}