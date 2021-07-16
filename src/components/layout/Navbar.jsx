import React from 'react'
import { Link } from 'react-router-dom'

//config import
import portfolioInfo from '../../portfolioConfig'

const navbarBgClass = `nav-container ${portfolioInfo.navbar.colorClassName}`


function Navbar() {
    return (
        <React.Fragment>
            <nav className={navbarBgClass}>
                <Link to="/" className="logo bold">{portfolioInfo.navbar.logoName}</Link>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
                <ul className="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><a href="../../cv/Afshin Nahian Tripto-WebDev.pdf" target="_blank" rel="noreferrer">CV <sup className="lightRed rounded pad1">PDF</sup></a></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><a href="https://blog.triptex.me/" target="_blank" rel="noreferrer">Blog</a></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default React.memo(Navbar)
