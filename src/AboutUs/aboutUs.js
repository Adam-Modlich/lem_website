import '../AboutUs/aboutUs.scss';
import { useState, useEffect } from 'react';
import tło from '../pictures/tłov7.jpg'
import tłod from '../pictures/tłov7d.jpg'
import tłor from '../pictures/tłov7r.jpg'
import tłop from '../pictures/tłov7p.jpg'
import tłob from '../pictures/tłov7b.jpg'

import elekImg from "../AboutUs/Boss/Elektronika.JPG"
import zawImg from "../AboutUs/Boss/Zawieszenie.JPG";
import markImg from "../AboutUs/Boss/Marketing.JPG";
import konsImg from "../AboutUs/Boss/Konstrukcja.JPG";
import mechImg from "../AboutUs/Boss/Mechanika.JPG";
import prezImg from "../AboutUs/Boss/Prezes.JPG";
import Footer from '../Footer';
import { useLocation } from 'react-router-dom';

export default function AboutUs(props){

  const [departments, setDepartments] = useState([
    { title: "",styleT: "row-reverse",styleTA: "right", styleB: `url(${tłor})`, text: "", name: "", img: prezImg, id: 1},
    { title: "",styleT: "row",styleTA: "left",styleB: `url(${tłod})`, text: "", name: "", img: elekImg, id: 4},
    { title: "",styleT: "row-reverse",styleTA: "right",styleB: `url(${tłob})`, text: "", name: "", img: markImg, id: 8},
    { title: "",styleT: "row",styleTA: "left",styleB: `url(${tłod})`, text: " ", name: "", img: zawImg, id: 5},
    { title: "",styleT: "row-reverse",styleTA: "right",styleB: `url(${tłop})`, text: "", name: "", img: konsImg, id: 7},
    { title: "",styleT: "row",styleTA: "left",styleB: `url(${tłod})`, text: "", name: "", img: mechImg, id: 6},
  ]);

  const { state } = useLocation()

    return(
        <>
        {props.lan ?
        <div>
        <div className="about">
            <div className="aboutContent">
                <div className="Container_1">
                    <h1> Light Electric Motorcycle </h1>
                      <a><i className="fa fa-angle-double-right"></i></a>
                </div>
                <div className="parent1">
                <div id="section2" className="Container_3">
                    <div className="image_1">

                    </div>
                    <div className="text_1">
                    <h1 className="acapits">{ props.lan.aboutUs[0].paragraphs[0].header }</h1>
                        <p lang="en">
                          { props.lan.aboutUs[0].paragraphs[0].pText }
                        </p>
                    </div>
                </div>
                </div>
                <div className="parent2">
                  <div className="Container_4">
                      <div className="image_2">

                      </div>
                      <div className="text_2">
                      <h1 className="acapits">{ props.lan.aboutUs[0].paragraphs[1].header }</h1>
                          <p lang="en">
                            { props.lan.aboutUs[0].paragraphs[1].pText }
                          </p>
                          </div>
                  </div>
                </div>
                <div className="parent3">
                  <div className='Container_55'>
                  <div className="Container_5">
                      <div className="image_3">

                      </div>
                      <div className="text_3">
                      <h1 className="acapits">{ props.lan.aboutUs[0].paragraphs[2].header }</h1>
                          <p>
                            { props.lan.aboutUs[0].paragraphs[2].pText }                          
                          </p>
                      </div>
                  </div>
                  </div>
                </div>
                <div className="parent3">
                    <div className="Container_6">
                      <div className='parentText_4'>
                      {departments.map((dep, index) => (
                        <div className='departmentsText' key={dep.id} style={{flexDirection: dep.styleT, textAlign: dep.styleTA, backgroundImage: dep.styleB }} >
                          <div className='depText'>
                            <h1 className="acapits" id="depAcapit" style={{textAlign: dep.styleTA}}>{props.lan.aboutUs[0].bosses[index].header}</h1>
                              <div className='textContentBoss'>
                                <h2 id="bossName">{props.lan.aboutUs[0].bosses[index].name}</h2>
                                <p id='beginText'>{props.lan.aboutUs[0].bosses[index].description}</p>
                              </div>
                          </div>
                          <img src={dep.img} id="imgPlace"></img>
                        </div>))}
                      </div>

                      {/* <div className='departmentsTabletMobile'>
                        <div className='prezIcon Icon'>
                          <h2>Prezes Koła</h2>
                          <img src={prezImg} alt="Zdjęcie Prezesa"></img>
                          
                        </div>
                        <div className='liderIcon Icon'>
                          <h2>Lider Photon</h2>
                          <img src={liderPhotonImg} alt="Zdjęcie Lidera Photon"></img>
                        </div>
                        <div className='liderIcon Icon'>
                          <h2>Lider SSV</h2>
                          <img src={liderSSVImg} alt="Zdjęcie Lidera SSV"></img>
                        </div>
                        <div className='elekIcon Icon'>
                          <h2>Elektronika</h2>
                          <img src={elekImg} alt="Zdjęcie Elektroniki"></img>
                        </div>
                        <div className='konsIcon Icon'>
                          <h2>Konstrukcja</h2>
                          <img src={konsImg} alt="Zdjęcie Konstrukcji"></img>
                        </div>
                        <div className='zawIcon Icon'>
                          <h2>Zawieszenie</h2>
                          <img src={zawImg} alt="Zdjęcie Zawieszenia"></img>
                        </div>
                        <div className='markIcon Icon'>
                          <h2>Marketing</h2>
                          <img src={markImg} alt="Zdjęcie Marketingu"></img>
                        </div>
                        <div className='mechIcon Icon'>
                          <h2>Mechanika</h2>
                          <img src={mechImg} alt="Zdjęcie Mechaniki"></img>
                        </div>
                      </div> */}
                    </div>
                  </div>
                <div className="parent3">
                  <div className="Container_5">
                      <div className="image_7">

                      </div>
                      <div className="text_3">
                      <h1 className="acapits">{ props.lan.aboutUs[0].lastParagraph[0].header }</h1>
                          <p lang="en">
                            { props.lan.aboutUs[0].lastParagraph[0].pText }
                          </p>
                      </div>
                  </div>
                </div>
                
            </div> 
        </div>
        <Footer len={props.lan.contactUs[0]}/>
        </div>
        : null}
        </>
    )
}

