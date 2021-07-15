import React from 'react'

//config import
import portfolioInfo from '../../portfolioConfig'

function PersonalSec() {
    return (
        <div className="mb4 pad2">
                    <p className="bold txt-xxl mt2">About Me</p>
                    <p className="txt-lg mt4 mb4">
                        {portfolioInfo.aboutMe}
                    </p>
        </div>
    )
}

const styles = (
    {
        height100: {
            height: ''
          }
    }
)

export default PersonalSec
