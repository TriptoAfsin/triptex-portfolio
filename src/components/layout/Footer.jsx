import React from 'react'
import SocialSection from '../Sections/SocialSection';

import useWindowDimensions from '../Hooks/ResizeHandler'

let date = new Date();
let currentYear = date.getFullYear();

const githubUrl = 'https://github.com/TriptoAfsin';
const facebookUrl = 'https://www.facebook.com/Tripto.Afsin';
const LikedinUrl = 'https://www.linkedin.com/in/triptoafsin/';
const mailUrl = 'mailto:AfsinTripto@gmail.com';


function Footer() {

    const { height, width } =  useWindowDimensions();


    return (
        <React.Fragment>
            <footer class="shadow purpleGradient">
                <div class="column">
                    <p class="txt-xl bold">Afshin Nahian Tripto</p>
                    <p class="txt-med">✅ Be the change</p>
                    <p>All rights reserved by: Tripto Afsin ©{currentYear}</p>
                </div>
                <div class="column">
                    <p class="txt-lg">🏡 Address</p>
                    <p>Dhaka, Bangladesh</p>
                </div>

                {width <= 600 ? <div>
                    <p class="txt-lg mt2">Find Me On</p>
                    <div className="row-force center-self">
                        <a href={githubUrl} className="grey pad2">Github ||</a>
                        <a href={LikedinUrl} className="grey">Linkedin</a>
                        <a href={facebookUrl} className="grey pad2"> || Facebook</a>
                        </div>
                        </div>
                        : <p></p>}

                <div className="hide-on-mobile">
                    <p class="txt-lg">Follow Me</p>
                    <SocialSection></SocialSection>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default React.memo(Footer)
