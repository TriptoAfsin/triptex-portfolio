import React from 'react'
import SocialSection from '../Sections/SocialSection';


let date = new Date();
let currentYear = date.getFullYear();



function Footer() {
    return (
        <React.Fragment>
            <footer class="shadow purpleGradient">
                <div class="column">
                    <p class="txt-xl">Afshin Nahian Tripto</p>
                    <p class="txt-med">Be the change</p>
                    <p>All rights reserved by: Tripto Afsin ©{currentYear}</p>
                </div>
                <div class="column">
                    <p class="txt-lg">🏡 Address</p>
                    <p>Dhaka, Bangladesh</p>
                </div>
                <div className="hide-on-mobile">
                    <p class="txt-lg">Follow Me</p>
                    <SocialSection></SocialSection>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer
