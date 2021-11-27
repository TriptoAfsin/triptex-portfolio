import React, { useState, lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
//import Particles  from "react-particles-js"; //particles js
const Particles = lazy(() => import("react-particles-js"));

//config import
import portfolioConfig from "../portfolioConfig";

//random stuff
//import randomizers from "simple-random-stuff";

//sections
//const EducationSec = lazy(() => import("../components/Sections/EducationSec"));
import EducationSec from "../components/Sections/EducationSec";
import PersonalSec from "../components/Sections/PersonalSec";
//const Skills = lazy(() => import("../components/Sections/Skills"));
import Skills from "../components/Sections/Skills";
import SocialSection from "../components/Sections/SocialSection";
import TypeWriterSec from "../components/Sections/TypeWriterSec";

//import  {Link} from 'react-router-dom'
import Footer from "../components/layout/Footer";
import MobileSkills from "../components/Sections/MobileSkills";

import useWindowDimensions from "../Hooks/ResizeHandler";
import ProjectsSec from "../components/Sections/ProjectsSec";

//images
import devWebpImg from "../../imgs/dev.webp";
import devjpgImg from "../../imgs/dev.jpg";

//skeleton
import Skeleton, {SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

//additional css
import "../components/css/additionalCss.css";
import ExperienceSec from "../components/Sections/ExperienceSec";
//import SpinnerLoader from "../components/SpinnerLoader";

const pageTitle = portfolioConfig.pageTitle;
const devName = portfolioConfig.devName;
const showParticles = portfolioConfig.showParticles;

function FrontPage() {
  const { height, width } = useWindowDimensions();
  const [ imgLoading, setImgLoading] = useState(true)

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
      </Helmet>
      <div className="content">
        {showParticles ? (
          <Suspense fallback={<p></p>}>
          <Particles
            className="particleCss"
            params={{
              particles: {
                number: {
                  value: width >= 600 ? 25 : 8,
                },
              },
              interactivity: {
                events: {
                  onclick: {
                    enable: true,
                    mode: "repulse",
                  },
                },
              },
            }}
          />
          </Suspense>
        ) : null}
        <div className="row mt4 center-self">
          <div className="column float-left center-self">
            {imgLoading && width < 600 ? (
              <SkeletonTheme color="#cbdbf5" highlightColor="#616469" baseColor="#1e1e1e">
                <Skeleton circle={true} width={width < 600 ? 320 : 180} height={width < 600 ? 320 : 180} duration={1} />
              </SkeletonTheme>
            ) : (
              ""
            )}
            <picture>
              <source
                srcSet={devWebpImg}
                className="rounded-img shadow"
                onLoad={() => setImgLoading(false)}
              />
              <img
                src={devjpgImg}
                className="rounded-img shadow"
                alt="TriptoAfsin"
                width="180px"
                height="180px"
                onLoad={() => setImgLoading(false)}
              />
            </picture>
          </div>
          <div className="column float-right pad4">
            <p className="txt-xxl left-txt bold center-txt">{devName}</p>
            <div className="txt-xl">
              <TypeWriterSec />
            </div>
            <div className="hide-on-mobile">
              <SocialSection></SocialSection>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="width50 mt5 mb5 center-txt border-white" style={{maxWidth: '99vw', marginLeft: width < 600 ? '1px' : ''}}>
            <PersonalSec></PersonalSec>
          </div>
          <div className="width50 mt5 mb5 center-self border-white" style={{maxWidth: '99vw', marginLeft: width < 600 ? '1px' : ''}}>
            <EducationSec></EducationSec>
          </div>
        </div>
        <div className={width > 900 ? "row": "column"}>
          <div className={width > 900 ? "width50 mb4" : ""}>
              {width >= 810 ? <Skills></Skills> : <MobileSkills></MobileSkills>}
          </div>
          <div className={width > 900 ? "width50 mb4" : ""}>
            <ProjectsSec></ProjectsSec>
          </div>
        </div>
      </div>
      <ExperienceSec></ExperienceSec>
      <Footer></Footer>
    </React.Fragment>
  );
}

const styles = {
  height100: {
    height: "100%",
  },
  maxWidth100: {
    maxWidth: "100vw"
  }
};

export default React.memo(FrontPage);
