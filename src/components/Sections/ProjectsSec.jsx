import React from 'react'
import { Link } from 'react-router-dom'

function ProjectsSec() {
    return (
        <React.Fragment>
            <div className="column">
                <div className="center-self mt4 pad4 orange">
                    <p className="txt-xxxl bold">Projects</p>
                </div>
                <div className="column pad4 center-self">
                    <div className="card greyGradient">
                        <p className="card-title txt-xxl">Cloud lib</p>
                        <p className="card-txt">
                            Cloud lib is an open collaborative project for better educational content distribution
                        </p>
                        <a className="card-btn pad2 right" href="https://triptoafsin.github.io/Cloud-Lib-React/#/">Learn more</a>
                    </div>
                    <div className="card greyGradient">
                        <p className="card-title txt-xxl">BUTEX NoteBOT</p>
                        <p className="card-txt">
                            This is a messenger chatbot made for BUTEX(Bangladesh University of Textiles) to
                            deliver study materials 24x7
                        </p>
                        <a className="card-btn pad2 right" href="https://github.com/TriptoAfsin/notebot-engine-v1">Learn more</a>
                    </div>
                    <div className="card greyGradient">
                        <p className="card-title txt-xxl">CountKoto-Android-App</p>
                        <p className="card-txt">
                            Versatile Textile Count Calculation Tool
                        </p>
                        <a className="card-btn pad2 right" href="https://play.google.com/store/apps/details?id=newcampusa.newproject.countkoto">Learn more</a>
                    </div>
                    <div className="row pad4">
                        <Link to="/projects" className="button center-self txt-lg bold blueGradient">Other Projects 👉</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProjectsSec
