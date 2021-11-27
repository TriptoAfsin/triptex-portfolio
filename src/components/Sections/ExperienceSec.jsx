import React from 'react'

function ExperienceSec() {
    return (
        <React.Fragment>
            <div className="center-self mt4 pad4 lightRed">
                <p className="txt-xxxl bold">Experiences</p>
            </div>
            <div className="card-container">
                <div className="pad4 mt4">
                    <p className="txt-xxl center-txt orangeGradient pad2">Delivery Hobe</p>
                    <div className="center-self">
                        <img src="https://i.imgur.com/Z6AXJy0.png" alt="delivery hobe" srcSet="" width="75px" height="70px" />
                    </div>
                    <p className="txt-lg center-txt">JavaScript Developer</p>
                    <p className="card-txt italic mt2 center-txt">
                        I've been working as a junior js developer at "Delivery Hobe" since October, 2021<br></br>
                        It's a hyper local e-commerce platform focused on 1hr deliveries 
                    </p>
                    <a className="card-btn pad2 center orangeGradient" href="https://www.deliveryhobe.com/">Learn more</a>
                </div>
                <div className="pad4 mt4">
                    <p className="txt-xxl center-txt blueGradient pad2">Bondi Pathshsala</p>
                    <div className="center-self">
                        <img src="https://i.imgur.com/FKoppLB.png" alt="Bondi Pathshala" srcSet="" width="75px" height="75px" />
                    </div>
                    <p className="txt-lg center-txt">Web Developer</p>
                    <p className="card-txt italic mt2 center-txt">
                        I'm the main web developer at "Bondi Pathshsala" since September, 2020 <br></br>
                        It has helped more than 2 million students with their studies
                    </p>
                    <a className="card-btn pad2 center blueGradient" href="https://bondipathshala.net/">Learn more</a>
                </div>
                <div className="pad4 mt4">
                    <p className="txt-xxl center-txt green pad2">BUTEX NoteBOT</p>
                    <div className="center-self">
                        <img src="https://i.imgur.com/BClXTdM.png" alt="notebot" srcSet="" width="75px" height="70px" />
                    </div>
                    <p className="txt-lg center-txt">Founder</p>
                    <p className="card-txt italic mt2 center-txt">
                        I've founded BUTEX NoteBOT in 2018, it's a 24x7 educational content delivery chatbot<br></br>
                        Through this time it has served thousands of students with their studies
                    </p>
                    <a className="card-btn pad2 center green" href="https://www.messenger.com/t/103148557940299">Learn more</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ExperienceSec
