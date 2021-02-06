import React from 'react'

import useWindowDimensions from '../Hooks/ResizeHandler'

function SocialSection() {

    const { height, width } =  useWindowDimensions();


    return (
        <React.Fragment>
            {width <= 600 ?  <a href="https://github.com/TriptoAfsin" className="pad2"><img src="./imgs/git-new.png" alt="github" width="80%"/></a> : <p></p>}
            <div className="row-force mt5 fade center-self" >
                <a href="https://github.com/TriptoAfsin" className="pad2 hide-on-mobile"><img src="./imgs/git-new.png" alt="github" width="48px"/></a>
                <a href="https://www.linkedin.com/in/triptoafsin/" className="pad2"><img src="./imgs/linkedin.svg" alt="linkedin" width="48px" /></a>
                <a href="https://www.facebook.com/Tripto.Afsin" className="pad2"><img src="./imgs/facebook.svg" alt="facebook" width="48px" /></a>
                <a href="mailto:AfsinTripto@gmail.com" className="pad2"><img src="./imgs/gmail.svg" alt="facebook" width="48px" /></a>
            </div>
        </React.Fragment>
    )
}

export default SocialSection
