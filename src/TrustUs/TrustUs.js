import '../TrustUs/TrustUs.scss';
import $ from 'jquery';
import partnerShip from '../TrustUs/Sponsors/partnership.pdf';
import becker from '../TrustUs/Sponsors/becker.svg';
import autocamp from '../TrustUs/Sponsors/autocomp.jpg';
import fogo from '../TrustUs/Sponsors/fogo.jpg';
import formanski from '../TrustUs/Sponsors/formanski.jpg';
import leoni from '../TrustUs/Sponsors/leoni.jpg';
import sonel from '../TrustUs/Sponsors/sonel.jpg';
import mesco from '../TrustUs/Sponsors/mesco.jpg';
import fracht from '../TrustUs/Sponsors/fracht.png';
import fronius from '../TrustUs/Sponsors/fronius.png';
import grupaSpeed from '../TrustUs/Sponsors/grupa-sped.png';
import phuinstel from '../TrustUs/Sponsors/phuinstel.png';
import solid from '../TrustUs/Sponsors/solidexpert.png';
import polaris from '../TrustUs/Sponsors/Polaris_Logo_Blue_RGB-min.png'
import spoina from '../TrustUs/Sponsors/spoina.png';
import ssab from '../TrustUs/Sponsors/ssab.png';
import stigal from '../TrustUs/Sponsors/stigal.png';
import tme from '../TrustUs/Sponsors/tme.png';
import wega from '../TrustUs/Sponsors/wega.jpg';
import yato from '../TrustUs/Sponsors/yato.jpg';
import zaopatrzenie24 from '../TrustUs/Sponsors/zaopatrzenie24.png';
import motokenner from '../TrustUs/Sponsors/motokenner.jpeg'
import ng from '../TrustUs/Sponsors/ng.png'
import w10 from '../TrustUs/Sponsors/w10_logo.png'
import electreecity from '../TrustUs/Sponsors/electreecity.png'
import Footer from '../Footer';
import { useLocation } from 'react-router';


export default function TrustUs(props){

    return(
        <>
        {props.lan ?
        <div>
            <div className='tuContainer'>
                <div className='tuTitle'> 
                    <h1>{ props.lan.sponsors[0].header }</h1>
                </div>
                <div className='tuSponsorFlexBox'>
                    <div className='paTitle'>
                        <h2><a href={partnerShip} target="_blank">{ props.lan.sponsors[0].buttonTitle }</a></h2>
                    </div>
                    <div className='SponsorBox'>
                        <div>
                            <a href="https://wm.pwr.edu.pl/" target="_blank">
                                <img src={w10}></img>
                            </a>
                        </div>
                    </div>
                    <div className='SponsorBox'>
                        <div>
                            <a href="https://www.becker-international.com/pl/pl/" target="_blank">
                                <img src={becker}></img>
                            </a>
                        </div>
                    </div>
                    <div className='SponsorBox'>
                        <a href="https://www.fogo.pl/" target="_blank">
                            <img src={fogo}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="https://solidexpert.com/" target="_blank">
                            <img src={solid}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="https://www.polarisatv.pl/" target="_blank">
                            <img src={polaris}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="https://mesco.com.pl/" target="_blank">
                            <img src={mesco}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="https://www.leoni-polska.com/pl/" target="_blank">
                            <img src={leoni}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="http://www.formanski.pl/" target="_blank">
                            <img src={formanski}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="https://grupa.sped.pl/" target="_blank">
                            <img src={grupaSpeed}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="https://fracht.pl/" target="_blank">
                            <img src={fracht}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="http://www.ac-m.pl/" target="_blank">
                            <img src={autocamp}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="https://electreecity.pro/" target="_blank">
                            <img src={electreecity}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="https://www.sonel.pl/pl/" target="_blank">
                            <img src={sonel}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="http://motokenner.pl/" target="_blank">
                            <img src={motokenner}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="https://www.ng.engineering/pl/start.html" target="_blank">
                            <img src={ng}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="https://www.fronius.com/pl-pl/poland/spawalnictwo" target="_blank">
                            <img src={fronius}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="https://phuinstel.eu/" target="_blank">
                            <img src={phuinstel}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="http://www.spoina.eu/" target="_blank">
                            <img src={spoina}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="https://www.ssab.pl/" target="_blank">
                            <img src={ssab}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="https://stigal.pl/" target="_blank">
                            <img src={stigal}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="https://www.tme.eu/pl/" target="_blank">
                            <img src={tme}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="http://www.wega.ostrowwlkp.pl/" target="_blank">
                            <img src={wega}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="https://yato.com/" target="_blank">
                            <img src={yato}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="https://zaopatrzenie24.pl/" target="_blank">
                            <img src={zaopatrzenie24}></img>
                        </a>
                    </div>
                    
                </div>

            </div>
        <Footer len={props.lan.contactUs[0]}/>
        </div>
        : null}
        </>
        
    )
}