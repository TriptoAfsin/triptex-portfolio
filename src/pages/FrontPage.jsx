import React from 'react'
import { Helmet } from "react-helmet";
import Particles from 'react-particles-js'; //particles js

//sections
import EducationSec from '../components/Sections/EducationSec';
import PersonalSec from '../components/Sections/PersonalSec';
import Skills from '../components/Sections/Skills';
import SocialSection from '../components/Sections/SocialSection';
import TypeWriterSec from '../components/Sections/TypeWriterSec';

//import  {Link} from 'react-router-dom'
import Footer from '../components/layout/Footer';
import MobileSkills from '../components/Sections/MobileSkills';

import useWindowDimensions from '../components/Hooks/ResizeHandler'
import ProjectsSec from '../components/Sections/ProjectsSec';

//images
import devWebpImg from '../../imgs/dev.webp'
import devjpgImg from '../../imgs/dev.jpg'

//additional css
import '../components/css/additionalCss.css'

const pageTitle = "Afshin Nahian Tripto";
const devName = "Afshin Nahian Tripto";
const showParticles = true;

function FrontPage() {
    const { height, width } = useWindowDimensions();

    return (
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{pageTitle}</title>
            </Helmet>
            <div className="content">
                {width >= 620 && showParticles ?
                    <Particles className="particleCss"
                        params={
                            {
                                particles: {
                                    number: {
                                        value: 25
                                    }
                                },
                                "interactivity": {
                                    "events": {
                                        "onclick": {
                                            "enable": true,
                                            "mode": "repulse"
                                        }
                                    }
                                },
                            }
                        }
                    />
                    :
                    <Particles className="particleCss"
                        params={
                            {
                                particles: {
                                    number: {
                                        value: 8
                                    },
                                    collisions: true,
                                },
                                "interactivity": {
                                    "events": {
                                        "onclick": {
                                            "enable": true,
                                            "mode": "repulse"
                                        }
                                    }
                                }
                            }
                        }
                    />
                }
                <div className="row mt4 center-self">
                    <div className="column float-left center-self">
                        <picture>
                            <source srcset={devWebpImg} />
                            <img src={devjpgImg} className="rounded-img shadow" alt="TriptoAfsin" width="180px" height="180px" />
                        </picture>
                    </div>
                    <div className="column float-right pad4">
                        <p className="txt-xxl left-txt bold center-txt">{devName}</p>
                        <div className="txt-xl">
                            <TypeWriterSec />
                        </div>
                        <div className="hide-on-mobile">
                            <SocialSection></SocialSection>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="width60 row mt5 mb5 border-white width40 center-txt">
                        <PersonalSec></PersonalSec>
                    </div>
                    <div className="width60 row mt5 mb5 border-white center-self">
                        <EducationSec></EducationSec>
                    </div>
                </div>
                

                <div className="row">
                    <div className="width50 mb4">
                        <div className="">
                            {width >= 820 ? <Skills></Skills> : <MobileSkills></MobileSkills>}
                        </div>
                    </div>
                    <div className="width50 mb4">
                        <ProjectsSec></ProjectsSec>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </React.Fragment>
    )
}


const styles = (
    {
        height100: {
            height: '100%'
        }
    }
)

export default React.memo(FrontPage)
