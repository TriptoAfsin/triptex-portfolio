import React from 'react'
import { Helmet } from "react-helmet";
const pageTitle = "404 Not Found - TriptoAfsin";
import notFoundImg from '../../imgs/404.svg'

import './miscPages.css'

function NotFound() {
    return (
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{pageTitle}</title>
            </Helmet>
            <div className="centerPage column ">
                <img src={notFoundImg} alt="" srcset="" width="512" />
                <p className="title2 bold">Not Found</p>
                <a href="./" className="button txt-xl mt3">🏠 Home</a>
            </div>

        </React.Fragment>


    )
}


export default React.memo(NotFound)
