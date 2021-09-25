import React from 'react'
import SocialSection from '../Sections/SocialSection';

//config import
import portfolioInfo from '../../portfolioConfig';

import useWindowDimensions from '../../Hooks/ResizeHandler'

let date = new Date();
let currentYear = date.getFullYear();

const githubUrl = portfolioInfo.socialLinks.socialGithub;
const facebookUrl = portfolioInfo.socialLinks.socialFacebook;
const LikedinUrl = portfolioInfo.socialLinks.socialLinkedin;
const mailUrl = portfolioInfo.socialLinks.socialMail;

const footerBgClass = `shadow ${portfolioInfo.footer.colorClassName}`


function Footer() {

    const { height, width } =  useWindowDimensions();


    return (
        <React.Fragment>
            <footer className={footerBgClass}>
                <div className="column">
                    <p className="txt-xl bold">{portfolioInfo.footer.footerTitle}</p>
                    <p className="txt-med">{portfolioInfo.footer.siteMoto}</p>
                    <p>All rights reserved by: {portfolioInfo.devName} ©{currentYear}</p>
                </div>
                <div className="column">
                    <p className="txt-lg">🏡 Address</p>
                    <p>{portfolioInfo.footer.footerAdrress}</p>
                </div>

                {width <= 600 ? <div>
                    <p className="txt-lg mt2">Find Me On</p>
                    <div className="row-force center-self">
                        <a href={githubUrl} className="grey pad2">Github ||</a>
                        <a href={LikedinUrl} className="grey">Linkedin</a>
                        <a href={facebookUrl} className="grey pad2"> || Facebook</a>
                        </div>
                        </div>
                        : <p></p>}

                <div className="hide-on-mobile">
                    <p className="txt-lg">Follow Me</p>
                    <SocialSection></SocialSection>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default React.memo(Footer)
