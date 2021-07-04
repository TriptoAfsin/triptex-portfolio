import React, { useState, useEffect } from 'react'
import {Helmet} from "react-helmet";
import DataProvider from '../components/DataHandler/DataProvider'
import '../components/css/loader.css'
const pageTitle = "Projects - TriptoAfsin";

function Projects() {

    const [loading, setLoading] = useState(true)
    const [query, setQuery] = useState('')
    const [match, setMatch] = useState('')
    const repoData = DataProvider("https://triptoafsin.github.io/API-Host/myProjects.json")
    console.log(repoData)

    useEffect(
        () => {
            if (repoData !== null) {
                setLoading(false)
                console.log("setLoading false now")
                searchQuery(repoData)
                console.log(query)
            }
        }, [repoData, query]
    )


    //regex
    const matchList = document.getElementById("card-container");

    const searchQuery = (libs) => {
        let matches = libs.filter(lib => {
            const regex = new RegExp(`${query}`, 'gi'); // ^: will search for which resuls starts with , gi:case insensitive search,RegExp: Regular Expression
            return lib.name.match(regex) || lib.about.match(regex) || lib.terms.match(regex)
        });
        if (query.length > 0) {
            outputHtml(matches);
            setMatch(matches.length)
            console.log(matches)
        }
    }

    const outputHtml = matches => {
        if (matches.length > 0) {
            const html = matches.map(match => `
            <div class="card greyGradient floatIn" key={element.link}>
                    <p class="card-title txt-xxl">${match.name}</p>
                    <p class="card-txt">${match.about}</p>
                    <a class="card-btn pad2 right blue" href=${match.link} target="_blank">Learn more...</a>
                </div>
            `).join('');

            console.log(html);
            matchList.innerHTML = html;
        }
        else {
            try {
                matchList.innerHTML = `<h1>No results</h1>`;
            } catch (error) {
                return
            }
        }
    };


    if (loading) {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{pageTitle}</title>
                </Helmet>
                <div className="center-self mt4">
                    <a><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></a>
                </div>

            </React.Fragment>
        )
    }
    else {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{pageTitle}</title>
                </Helmet>
                <div>
                    <div className="center-self mb4 mt2 pad2">
                        <input className="rounded shadow txt-lg pad10" placeholder="Search..." onChange={e => setQuery(e.target.value)} value={query}></input>
                    </div>
                    <div className="card-container" id="card-container">
                        {
                            repoData.map(element => {
                                return (

                                    <div className={"card floatIn greyGradient"} key={element.link}>
                                        <p className="card-title txt-xxl">{element.name}</p>
                                        <p className="card-txt">{element.about}</p>
                                        <a className="card-btn pad2 right blue" href={element.link} target="_blank">Learn more...</a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="row pad4 center-self mt4">
                    <a href="https://github.com/TriptoAfsin" className="button center-self txt-lg bold blueGradient" target="_blank">👉 Github</a>
                </div>
            </React.Fragment>
        )
    }
}

export default React.memo(Projects)
