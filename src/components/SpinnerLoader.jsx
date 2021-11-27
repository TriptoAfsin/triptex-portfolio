import React from 'react'
import './css/loader.css';

function SpinnerLoader() {
    return (
        <>
           <a>
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </a>  
        </>
    )
}

export default SpinnerLoader
