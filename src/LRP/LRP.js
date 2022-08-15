import '../LRP/LRP.scss';
import $ from 'jquery';
import Footer from '../Footer';
import Slider from 'react-touch-drag-slider';
import picture1 from './images/Le Mans 2022 - 1 day -23.jpg';
import picture2 from './images/Le Mans 2022 - 2 day -73.jpg';
import picture3 from './images/Le Mans 2022 - 2 day -92.jpg';
import picture4 from './images/Le Mans 2022 - 6 day -7763.jpg';
import picture5 from './images/Le Mans 2022 - 3 day -37.jpg';
import picture6 from './images/Le Mans 2022 - 3 day -63.jpg';
import picture7 from './images/Le Mans 2022 - 6 day -2329.jpg';
// import jsonFile from 
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import pl from '../pl-PL.json';
import en from '../en-EN.json'

const images = [
  {url: picture1, title: "picture1"},
  {url: picture2, title: "picture2"},
  {url: picture3, title: "picture3"},
  {url: picture4, title: "picture4"},
  {url: picture5, title: "picture5"},
  {url: picture6, title: "picture6"},
  {url: picture7, title: "picture7"}
]

export default function LRP(props){

return(
    <>
    {props.lan ?
    <div>
      <div className="slider">

      <Slider
            onSlideComplete={(i) => {
              console.log('finished dragging, current slide is', i)
            }}
            onSlideStart={(i) => {
              console.log('started dragging on slide', i)
            }}
            activeIndex={0}
            threshHold={100}
            transition={0.5}
            scaleOnDrag={true}

          >
            {images.map(({ url, title}, index) => (
              <div className='container_pic_text'>
              <img src={url} key={index} alt={title} />
              <p>{props.lan.LRP[index].paragraphs}</p>
              </div>
            ))}
          </Slider>
      </div>
      <div className='drag'>
          <FaArrowAltCircleLeft/>
          <p>  {props.lan.drag[0].drag}  </p>
          < FaArrowAltCircleRight/>
      </div>

          <div className='LRPEndText'>
            {props && props.lan.LRP.map((item,index) => (
              <p key={index}>
                { item.paragraphs }
              </p>
            ))}
          </div>
      <Footer len={props.lan.contactUs[0]} />
    </div>
    : null}
    </>)

}