import React from "react";
import Footer from "../components/layout/Footer";
import { Helmet } from "react-helmet";

const githubUrl = "https://github.com/TriptoAfsin";
const facebookUrl = "https://www.facebook.com/Tripto.Afsin";
const LikedinUrl = "https://www.linkedin.com/in/triptoafsin/";
const mailUrl = "mailto:AfsinTripto@gmail.com";
const pageTitle = "Contact Me - TriptoAfsin";

let SocialArr = [
    {
        id: 1,
        title: "🟢 Github/TriptoAfsin",
        link: githubUrl
    },
    {
        id: 2,
        title: "🔵 Linkedin/triptoafsin",
        link: LikedinUrl
    },
    {
        id: 3,
        title: "🟠 Facebook/Tripto.Afsin",
        link: facebookUrl
    },
    {
        id: 4,
        title: "🟣 AfsinTripto@gmail.com",
        link: mailUrl
    },
]

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
            I'm available on github, facebook, linkedin or you can get in touch
            with me through mail
          </p>
          {
              SocialArr.map(
                  element => (
                    <div className="row-force center-self mt4 darkBg rounded fade width50" key={element.id} style={{maxWidth: '90%'}}>
                    <a
                      href={element.link}
                      className="white-txt pad3 txt-lg bold"
                      style={styles.noUnderline}
                    >
                      {element.title}
                    </a>
                  </div>
                  )
              )
          }
        </div>
      </div>

      <Footer></Footer>
    </React.Fragment>
  );
}

const styles = {
  noUnderline: {
    textDecoration: "none",
  },
};

export default React.memo(Contact);
