import React from 'react'
//import { useState, useEffect } from 'react';
//import {StaticImage} from 'gatsby-plugin-image'
import {Helmet} from "react-helmet";
import Typewriter from 'typewriter-effect'; // more: https://www.npmjs.com/package/typewriter-effect
import EducationSec from '../components/Sections/EducationSec';
import PersonalSec from '../components/Sections/PersonalSec';
import Skills from '../components/Sections/Skills';
import SocialSection from '../components/Sections/SocialSection';

//import  {Link} from 'react-router-dom'
import Footer from '../components/layout/Footer';
import MobileSkills from '../components/Sections/MobileSkills';

import useWindowDimensions from '../components/Hooks/ResizeHandler'
import ProjectsSec from '../components/Sections/ProjectsSec';

//images
import devWebpImg from '../../imgs/dev.webp'
import devjpgImg from '../../imgs/dev.jpg'


const strings = ["a Freelance Webdeveloper", "an Engineering Student", "a Learner", "a Teacher"];
const pageTitle = "Afshin Nahian Tripto";


function FrontPage() {
    const { height, width } = useWindowDimensions();

    return (
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{pageTitle}</title>
            </Helmet>
            <div className="content">
                <div className="row mt4 center-self">
                    <div className="column float-left center-self">
                        <picture>
                            <source srcset={devWebpImg} />
                            <img src={devjpgImg} className="rounded-img shadow" alt="TriptoAfsin" width="180px" height="180px" />
                        </picture>
                    </div>
                    <div className="column float-right pad4">
                        <p className="txt-xxl left-txt bold center-txt">Afshin Nahian Tripto</p>

                        <div className="txt-xl">
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString(`I'm ${strings[0]}`)
                                        .callFunction(() => {
                                            console.log('String typed out!');
                                        })
                                        .pauseFor(2000)
                                        .deleteChars(strings[0].length)
                                        .typeString(`${strings[1]}`)
                                        .pauseFor(2000)
                                        .deleteChars(strings[1].length)
                                        .typeString(`${strings[2]}`)
                                        .pauseFor(2000)
                                        .deleteChars(strings[2].length)
                                        .deleteAll()
                                        .typeString(`Webdeveloper || Student || Learner`)
                                        .callFunction(() => {
                                            console.log("Typing Done !")
                                        })
                                        .start();
                                }}
                            />
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
