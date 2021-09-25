import React from 'react'
import "../../App.css";
import { CgTerminal} from 'react-icons/cg';
import { FcLinux, FcAndroidOs} from 'react-icons/fc';
import { FaNodeJs, FaWordpress, FaNpm} from 'react-icons/fa';
import { ImNpm} from 'react-icons/im';
import { 
    SiFirebase, 
    SiMicrosoftpowerpoint,
    SiAdobeillustrator, 
    SiFlutter, 
    SiCpanel, 
    SiHtml5, 
    SiCss3, 
    SiJavascript, 
    SiReact, 
    SiNextDotJs, 
    SiPostgresql, 
    SiMysql, 
    SiGithub, 
    SiHeroku
} from 'react-icons/si';


function Skills() {
    return (
        <div className="column">
        <div className="center-self mt4 pad4 aquaGradient">
                <p className="txt-xxxl bold">Skills</p>
        </div>
        <div className="row pad4 center-self hide-on-mobile mt4">
                <p className="txt-xl bold pad4 hide-on-mobile">Frontend: </p>
                <a href="https://en.wikipedia.org/wiki/HTML5" className="mr1 hide-on-mobile"><SiHtml5 size="48" color="#f64e2d"/></a>
                <a href="https://www.w3schools.com/css/css_intro.asp" className="mr1 hide-on-mobile"><SiCss3 size="48" color="#2196f3"/></a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="mr1 hide-on-mobile"><SiJavascript size="48" color="#f0db4f"/></a>
                <a href="https://reactjs.org/" className="mr1 hide-on-mobile" title="React"><SiReact size="48" color="#00dffe"/></a>
                <a href="https://nextjs.org/" className="mr1 hide-on-mobile" title="Next JS"><SiNextDotJs size="48" color="#FFFFFF"/></a>
                <a href="https://en.wikipedia.org/wiki/WordPress" className="mr1 hide-on-mobile"><FaWordpress size="48" color="#4575f8"/></a>
        </div>
        <div className="row  pad4 center-self">
            <p className="txt-xl bold pad4 hide-on-mobile">Backend: </p>
            <a href="https://en.wikipedia.org/wiki/Node.js" className="mr1 hide-on-mobile"><FaNodeJs size="48" color="#6aa05c"/></a>
        </div>
        <div className="row  pad4 center-self">
            <p className="txt-xl bold pad4 hide-on-mobile">Database: </p>
            <a href="https://www.postgresql.org/" className="mr1 hide-on-mobile"><SiPostgresql size="48" color="#336791"/></a>
            <a href="https://www.mysql.com/" className="mr1 hide-on-mobile"><SiMysql size="56" color="#dc8400"/></a>
        </div>
        <div className="row  pad4 center-self">
            <p className="txt-xl bold pad4 hide-on-mobile">Mobile: </p>
            <a href="https://en.wikipedia.org/wiki/Android_software_development" className="mr1 hide-on-mobile"><FcAndroidOs size="48"/></a>
            <a href="https://en.wikipedia.org/wiki/Flutter_(software)" className="mr1 hide-on-mobile"><SiFlutter size="48" color="#44d1fd"/></a>
        </div>
        <div className="row  pad4 center-self">
            <p className="txt-xl bold pad4 hide-on-mobile">CI/CD: </p>
            <a href="https://github.com/" className="mr1 hide-on-mobile"><SiGithub size="48" color="#FFFFFF"/></a>
            <a href="https://en.wikipedia.org/wiki/CPanel" className="mr1 hide-on-mobile"><SiCpanel size="56" color="#ff712d"/></a>
            <a href="https://www.heroku.com/" className="mr1 hide-on-mobile"><SiHeroku size="56" color="#8868ad"/></a>
        </div>
        <div className="row pad4 center-self">
            <p className="txt-xl bold pad4 hide-on-mobile">Others: </p>
            <a href="https://www.npmjs.com/" className="mr1 hide-on-mobile"><ImNpm size="48" color="#c80000"/></a>
            <a href="https://en.wikipedia.org/wiki/Linux" className="mr1 hide-on-mobile"><FcLinux size="48"/></a>
            <a href="https://en.wikipedia.org/wiki/Command-line_interface" className="mr1 hide-on-mobile"><CgTerminal size="48"/></a>
            <a href="https://en.wikipedia.org/wiki/Firebase" className="mr1 hide-on-mobile"><SiFirebase size="48" color="#ffcb2b"/></a>
            <a href="https://en.wikipedia.org/wiki/Microsoft_PowerPoint" className="mr1 hide-on-mobile"><SiMicrosoftpowerpoint size="48" color="#c43e1c"/></a>
            <a href="https://en.wikipedia.org/wiki/Adobe_Illustrator" className="mr1 hide-on-mobile"><SiAdobeillustrator size="48" color="#f07000"/></a>
        </div>
    </div>
    )
}

export default React.memo(Skills)
