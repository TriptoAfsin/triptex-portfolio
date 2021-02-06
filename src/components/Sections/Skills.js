import React from 'react'

import "../../App.css";


function Skills() {
    return (
        <div className="column">
        <div className="center-self mt4 pad4 blueGradient">
                <p className="txt-xxxl bold">Skills</p>
        </div>
        <div className="hide-on-desktop">
            <ul>
                <li>React, Wordpress</li>
                <li>Node</li>
                <li>Andoroid Native, Flutter</li>
                <li>Linux, Cli, Firebase,Heroku</li>
                <li>Powerpoint, Illustrator</li>
            </ul>
        </div>
        <div className="row pad4 center-self hide-on-mobile mt4">
                <p className="txt-xl bold pad4 hide-on-mobile">Frontend: </p>
                <a href="" className="mr1 hide-on-mobile"><img src="./imgs/skills/html5.png" alt="HTML" width="48px"/></a>
                <a href="" className="mr1 hide-on-mobile"><img src="./imgs/skills/css-3.svg" alt="CSS" width="48px"/></a>
                <a href="" className="mr1 hide-on-mobile"><img src="./imgs/skills/javascript.svg" alt="Javascript" width="48px"/></a>
                <a href="" className="mr1 hide-on-mobile"><img src="./imgs/skills/react.webp" alt="React" width="48px"/></a>
                <a href="" className="mr1 hide-on-mobile"><img src="./imgs/skills/wordpress.webp" alt="Wordpress" width="48px"/></a>
        </div>
        <div className="row  pad4 center-self">
            <p className="txt-xl bold pad4 hide-on-mobile">Backend: </p>
            <a href="" className="mr1 hide-on-mobile"><img src="./imgs/skills/node.png" alt="Node" width="56px"/></a>
            <a href="" className="mr1 hide-on-mobile"><img src="./imgs/skills/cpanel.png" alt="cPanel" width="48px"/></a>
        </div>
        <div className="row  pad4 center-self">
            <p className="txt-xl bold pad4 hide-on-mobile">Mobile: </p>
            <a href="" className="mr1 hide-on-mobile"><img src="./imgs/skills/android.svg" alt="Android" width="48px"/></a>
            <a href="" className="mr1 hide-on-mobile"><img src="./imgs/skills/flutter.webp" alt="Flutter" width="48px"/></a>
        </div>
        <div className="row pad4 center-self">
            <p className="txt-xl bold pad4 hide-on-mobile">Others: </p>
            <a href="" className="mr1 hide-on-mobile"><img src="./imgs/skills/linux.webp" alt="Linux" width="48px"/></a>
            <a href="" className="mr1 hide-on-mobile"><img src="./imgs/skills/command-line.svg" alt="Command Line" width="48px"/></a>
            <a href="" className="mr1 hide-on-mobile"><img src="./imgs/skills/firebase.webp" alt="Firebase" width="48px"/></a>
            <a href="" className="mr1 hide-on-mobile"><img src="./imgs/skills/powerpoint.png" alt="Powerpoint" width="48px"/></a>
            <a href="" className="mr1 hide-on-mobile"><img src="./imgs/skills/illustrator.svg" alt="Illustrator" width="48px"/></a>
        </div>
    </div>
    )
}

export default Skills
