import React from 'react'

import useWindowDimensions from '../Hooks/ResizeHandler'

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
                <a href={githubUrl} className="pad2 hide-on-mobile"><img src="./imgs/git-new.png" alt="github" width="48px"/></a>
                <a href={LikedinUrl} className="pad2"><img src="./imgs/linkedin.svg" alt="linkedin" width="48px" /></a>
                <a href={facebookUrl} className="pad2"><img src="./imgs/facebook.svg" alt="facebook" width="48px" /></a>
                <a href={mailUrl} className="pad2"><img src="./imgs/gmail.svg" alt="facebook" width="48px" /></a>
            </div>
        </React.Fragment>
    )
}

export default SocialSection
