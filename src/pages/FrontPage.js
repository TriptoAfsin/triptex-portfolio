import React from 'react'
import { useState, useEffect } from 'react';

import Typewriter from 'typewriter-effect'; // more: https://www.npmjs.com/package/typewriter-effect
import EducationSec from '../components/Sections/EducationSec';
import PersonalSec from '../components/Sections/PersonalSec';
import Skills from '../components/Sections/Skills';
import SocialSection from '../components/Sections/SocialSection';

import  {Link} from 'react-router-dom'
import Footer from '../components/layout/Footer';
import MobileSkills from '../components/Sections/MobileSkills';

import useWindowDimensions from '../components/Hooks/ResizeHandler'




const strings = ["a Freelance Webdeveloper", "an Engineering Student", "a Learner", "a Teacher"];






function FrontPage() {
    const { height, width } =  useWindowDimensions();

    return (
        <React.Fragment>
            <div className="row mt4 center-self">
                <div className="column float-left center-self">
                    <a><img src="./imgs/dev.webp" className="rounded-img shadow" alt="TriptoAfsin" width="180px" height="180px"></img></a>
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
            <div className="center-self mt5 mb5">
                <PersonalSec></PersonalSec>
                <EducationSec></EducationSec>
            </div>
            <div className="row">
            <div className="width50 mb4">
                <div className="">
                    {width >= 820 ? <Skills></Skills> : <MobileSkills></MobileSkills>}
                </div>
            </div>
            <div className="width50 mb4">
             <div className="column">
                <div className="center-self mt4 pad4 orange">
                    <p className="txt-xxxl bold">Projects</p>
                </div>
                <div class="column pad4">
                    <div class="card greyGradient">
                        <p class="card-title txt-xxl">Cloud lib</p>
                        <p class="card-txt">
                            Cloud lib is an open collaborative project for better educational content distribution
                        </p>
                        <a className="card-btn pad2 right" href="https://triptoafsin.github.io/Cloud-Lib-React/#/">Learn more</a>
                    </div>
                    <div class="card greyGradient">
                        <p class="card-title txt-xxl">BUTEX NoteBOT</p>
                        <p class="card-txt">
                        This is a messenger chatbot made for BUTEX(Bangladesh University of Textiles) to 
                        deliver study materials 24x7
                        </p>
                        <a className="card-btn pad2 right" href="https://github.com/TriptoAfsin/notebot-engine-v1">Learn more</a>
                    </div>
                    <div class="card greyGradient">
                        <p class="card-title txt-xxl">CountKoto-Android-App</p>
                        <p class="card-txt">
                        Versatile Textile Count Calculation Tool
                        </p>
                        <a className="card-btn pad2 right" href="https://play.google.com/store/apps/details?id=newcampusa.newproject.countkoto">Learn more</a>
                    </div>
                    <div className="row pad4">
                        <Link to="/projects" className="button center-self txt-lg bold blueGradient">Other Projects 👉</Link>
                    </div>
                </div>
            </div>
            </div>         
            </div>
            <Footer></Footer>
           
        </React.Fragment>
    )
}

export default FrontPage
