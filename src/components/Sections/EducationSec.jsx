import React from 'react'
//config import 
import portfolioInfo from '../../portfolioConfig'

function EducationSec() {
    return (
        <div className="mb4">
                    <p className="bold txt-xxl mt2">Educational background</p>
                    <div className="ml2 txt-lg mt4">
                        <p className="mt1 mb1">👨‍🎓 Bsc: Industrial & Production Engineering(<a href="https://www.butex.edu.bd/">BUTEX</a>)</p>
                        <p className="mt1 mb1">{portfolioInfo.educationalSection[1]}</p>
                        <p className="mt1 mb4">{portfolioInfo.educationalSection[2]}</p>
                    </div>        
        </div>
    )
}

export default EducationSec
