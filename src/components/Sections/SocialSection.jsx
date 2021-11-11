import React from 'react'
import useWindowDimensions from '../../Hooks/ResizeHandler'
import { SocialIcon } from 'react-social-icons';

//config import 
import portfolioInfo from '../../portfolioConfig';

const githubUrl = portfolioInfo.socialLinks.socialGithub;
const facebookUrl = portfolioInfo.socialLinks.socialFacebook;
const LikedinUrl = portfolioInfo.socialLinks.socialLinkedin;
const mailUrl = portfolioInfo.socialLinks.socialMail;

function SocialSection() {
    const { height, width } =  useWindowDimensions();
    return (
        <>
            {width <= 600 ?  <a href={githubUrl} className="pad2"><img src="./imgs/git-new.png" alt="github" width="80%"/></a> : <p></p>}
            <div className="row-force mt5 fade center-self" >
                <SocialIcon url={githubUrl} bgColor="#ffff" className="hide-on-mobile mr2"/>
                <SocialIcon url={LikedinUrl} bgColor="#ffff" className="hide-on-mobile mr2"/>
                <SocialIcon url={facebookUrl} bgColor="#ffff" className="hide-on-mobile mr2"/>
                <SocialIcon url={mailUrl} bgColor="#ffff" className="hide-on-mobile"/>
            </div>
        </>
    )
}

export default React.memo(SocialSection)
