import React from 'react'
import useWindowDimensions from '../Hooks/ResizeHandler'
import { SocialIcon } from 'react-social-icons';

const githubUrl = 'https://github.com/TriptoAfsin';
const facebookUrl = 'https://www.facebook.com/Tripto.Afsin';
const LikedinUrl = 'https://www.linkedin.com/in/triptoafsin/';
const mailUrl = 'mailto:AfsinTripto@gmail.com';

function SocialSection() {

    const { height, width } =  useWindowDimensions();


    return (
        <React.Fragment>
            {width <= 600 ?  <a href={githubUrl} className="pad2"><img src="./imgs/git-new.png" alt="github" width="80%"/></a> : <p></p>}
            <div className="row-force mt5 fade center-self" >
                <SocialIcon url={githubUrl} bgColor="#ffff" className="hide-on-mobile mr2"/>
                <SocialIcon url={LikedinUrl} bgColor="#ffff" className="hide-on-mobile mr2"/>
                <SocialIcon url={facebookUrl} bgColor="#ffff" className="hide-on-mobile mr2"/>
                <SocialIcon url={mailUrl} bgColor="#ffff" className="hide-on-mobile"/>
            </div>
        </React.Fragment>
    )
}

export default React.memo(SocialSection)
