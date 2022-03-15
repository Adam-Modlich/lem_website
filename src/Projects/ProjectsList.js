import '../Projects/Projects.scss';
import CountUp, { useCountUp } from 'react-countup';
import $ from 'jquery';
import VisibilitySensor from 'react-visibility-sensor';
import { useState } from 'react';

const ProjectsList = ({projects}) => {

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
        <div>
        {projects.map((project) => {
        <div className='pageContainer'>
            <div key={project.id} className={project.classN} >
                <div className='text'>
                    <h1 className="projectTitle">{ project.title }</h1>
                    <h4 className='projectTitleDesc'>{ project.underTitle }</h4>
                    <p lang="en"> { project.text }
                    </p>
                    <div className="iconsContainer">
                        <div className='iconsProjects'>
                            <h1 className="value"><CountUp end={project.endV1} duration={1.5} redraw={false}>{({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}</CountUp>{project.unit1}</h1>
                            <h4 className="valueIs">{project.unitOf1}</h4>
                        </div>
                        <div className='iconsProjects'>
                            <h1 className="value"><CountUp end={project.endV2} duration={1.5} redraw={false}>{({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}</CountUp> {project.unit2}</h1>
                            <h4 className="valueIs">{project.unitOf2}</h4>

                        </div>
                        <div className='iconsProjects'>
                            <h1 className="value"><CountUp end={project.endV3} duration={1.5} redraw={false}>{({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}</CountUp> {project.unit3}</h1>
                            <h4 className="valueIs">{project.unitOf3}</h4>

                        </div>
                        <div className='iconsProjects'>
                            <h1 className="value"><CountUp end={project.endV4} duration={1.5} redraw={false}>{({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}</CountUp>{project.unit4}</h1>
                            <h4 className="valueIs">{project.unitOf4}</h4>

                        </div>
                    </div>
                </div>
                <div className='switchButton'>
                    <i className='fa fa-angle-double-right' onClick={() => switchPictureRight(0)} style={{fontSize:"60px"}}></i>
                    <i className='fa fa-angle-double-left' onClick={() => switchPictureRight(1)} style={{fontSize:"60px"}}></i>
                </div>
            </div>
        </div>
        })}
        </div>
    );}

export default ProjectsList;