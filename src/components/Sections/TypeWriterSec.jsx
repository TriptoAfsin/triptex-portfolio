import React from 'react'
import Typewriter from 'typewriter-effect'; // more: https://www.npmjs.com/package/typewriter-effect

//config import
import portfolioInfo from '../../portfolioConfig';

const strings = portfolioInfo.typeWriterStringsArr

function TypeWriterSec() {
    return (
        <div>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString(`I'm ${strings[0]}`)
                        .callFunction(() => {
                            console.log('String typed out!');
                        })
                        .pauseFor(2000)
                        .deleteChars(strings[0].length)
                        .typeString(`${strings[1]}`)
                        .pauseFor(2000)
                        .deleteChars(strings[1].length)
                        .typeString(`${strings[2]}`)
                        .pauseFor(2000)
                        .deleteChars(strings[2].length)
                        .deleteAll()
                        .typeString(`Webdeveloper || Student || Learner`)
                        .callFunction(() => {
                            //console.log("Typing Done !")
                        })
                        .start();
                }}
            />
        </div>
    )
}

export default TypeWriterSec
