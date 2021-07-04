import React from 'react'
import Footer from '../components/layout/Footer'
import {Helmet} from "react-helmet";

const githubUrl = 'https://github.com/TriptoAfsin';
const facebookUrl = 'https://www.facebook.com/Tripto.Afsin';
const LikedinUrl = 'https://www.linkedin.com/in/triptoafsin/';
const mailUrl = 'mailto:AfsinTripto@gmail.com';
const pageTitle = "Contact Me - TriptoAfsin";

function Contact() {
    return (
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{pageTitle}</title>
            </Helmet>
            <div className="content">
                <h1 className="fade">Get in touch</h1>
                <div className="center-self">
                    <p className="txt-lg fade">
                        I'm available on github, facebook, linkedin or you can get in touch with me through mail
                    </p>
                    <div className="row-force center-self mt4 darkBg rounded fade width50">
                        <a href={githubUrl} className="white-txt pad3 txt-lg bold" style={styles.noUnderline}>🟢 Github/TriptoAfsin</a>
                    </div>
                    <div className="row-force center-self mt4 darkBg rounded fade width50">
                        <a href={LikedinUrl} className="white-txt pad3 txt-lg bold" style={styles.noUnderline}>🔵 Linkedin/triptoafsin</a>
                    </div>
                    <div className="row-force center-self mt4 darkBg rounded fade width50">
                        <a href={facebookUrl} className="white-txt pad3 txt-lg bold" style={styles.noUnderline}>🟠 Facebook/Tripto.Afsin</a>
                    </div>
                    <div className="row-force center-self mt4 darkBg rounded fade width50">
                        <a href={mailUrl} className="white-txt pad3 txt-lg bold" style={styles.noUnderline}>🟣 AfsinTripto@gmail.com</a>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </React.Fragment>
    )
}

const styles = (
    {
          noUnderline : {
              textDecoration: 'none'
          }
    }
)

export default React.memo(Contact)
