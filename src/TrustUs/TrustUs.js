import '../TrustUs/TrustUs.scss';
import $ from 'jquery';
import becker from '../TrustUs/Sponsors/becker.svg';
import autocamp from '../TrustUs/Sponsors/autocomp.jpg';
import fogo from '../TrustUs/Sponsors/fogo.jpg';
import formanski from '../TrustUs/Sponsors/formanski.jpg';
import leoni from '../TrustUs/Sponsors/leoni.jpg';
import mesco from '../TrustUs/Sponsors/mesco.jpg';
import fracht from '../TrustUs/Sponsors/fracht.png';
import fronius from '../TrustUs/Sponsors/fronius.png';
import grupaSpeed from '../TrustUs/Sponsors/grupa-sped.png';
import kisielewski from '../TrustUs/Sponsors/kisielewski.png';
import lockhard from '../TrustUs/Sponsors/lockhard.png';
import phuinstel from '../TrustUs/Sponsors/phuinstel.png';
import solid from '../TrustUs/Sponsors/solidexpert.png';
import spoina from '../TrustUs/Sponsors/spoina.png';
import ssab from '../TrustUs/Sponsors/ssab.png';
import stigal from '../TrustUs/Sponsors/stigal.png';
import tme from '../TrustUs/Sponsors/tme.png';
import wega from '../TrustUs/Sponsors/wega.jpg';
import yato from '../TrustUs/Sponsors/yato.jpg';
import zaopatrzenie24 from '../TrustUs/Sponsors/zaopatrzenie24.png';
import Footer from '../Footer';


export default function TrustUs(){

    return(
        <>
            <div className='tuContainer'>
                <div className='tuTitle'> 
                    <h1>Partnerzy</h1>
                </div>
                <div className='tuSponsorFlexBox'>
                    <div className='SponsorBox'>
                        <a href="#">
                            <img src={becker}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="#">
                            <img src={fogo}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="#">
                            <img src={solid}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="#">
                            <img src={mesco}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="#">
                            <img src={leoni}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="#">
                            <img src={formanski}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="#">
                            <img src={grupaSpeed}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="#">
                            <img src={kisielewski}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="#">
                            <img src={fracht}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="#">
                            <img src={autocamp}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="#">
                            <img src={fronius}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="#">
                            <img src={phuinstel}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="#">
                            <img src={lockhard}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="#">
                            <img src={spoina}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="#">
                            <img src={ssab}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="#">
                            <img src={stigal}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="#">
                            <img src={tme}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="#">
                            <img src={wega}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="#">
                            <img src={yato}></img>
                        </a>
                    </div>
                    <div className='SponsorBox'>
                        <a href="#">
                            <img src={zaopatrzenie24}></img>
                        </a>
                    </div>
                </div>

            </div>
        <Footer/>
        
        </>
        
    )
}