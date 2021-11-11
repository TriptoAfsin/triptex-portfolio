import React from 'react'

function ExperienceSec() {
    return (
        <React.Fragment>
            <div className="center-self mt4 pad4 lightRed">
                <p className="txt-xxxl bold">Experiences</p>
            </div>
            <div className="card-container">
                <div className="pad4 mt4">
                    <p class="txt-xxl center-txt orangeGradient pad2">Delivery Hobe</p>
                    <p class="txt-lg center-txt">JavaScript Developer</p>
                    <p class="card-txt italic mt2 center-txt">
                        I've been working as a junior node js developer at "Delivery Hobe" since October, 2021
                    </p>
                    <a className="card-btn pad2 center orangeGradient" href="https://www.deliveryhobe.com/">Learn more</a>
                </div>
                <div className="pad4 mt4">
                    <p class="txt-xxl center-txt blueGradient pad2">Bondi Pathshsala</p>
                    <p class="txt-lg center-txt">Web Developer</p>
                    <p class="card-txt italic mt2 center-txt">
                        I'm the main web developer at "Bondi Pathshsala" since September, 2020
                    </p>
                    <a className="card-btn pad2 center blueGradient" href="https://bondipathshala.net/">Learn more</a>
                </div>
                <div className="pad4 mt4">
                    <p class="txt-xxl center-txt green pad2">BUTEX NoteBOT</p>
                    <p class="txt-lg center-txt">Founder</p>
                    <p class="card-txt italic mt2 center-txt">
                        I've founded BUTEX NoteBOT in 2018, it's a 24x7 educational content delivery chatbot<br></br>
                        Through this time it has served thousand of students with their studies
                    </p>
                    <a className="card-btn pad2 center green" href="https://www.messenger.com/t/103148557940299">Learn more</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ExperienceSec
