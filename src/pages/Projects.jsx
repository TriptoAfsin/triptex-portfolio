import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import DataProvider from "../DataHandler/DataProvider";
import "../components/css/loader.css";
import "../components/css/additionalCss.css";
const pageTitle = "Projects - TriptoAfsin";

import useWindowDimensions from "../Hooks/ResizeHandler";

//skeleton
import Skeleton, {SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import SpinnerLoader from "../components/SpinnerLoader";

function Projects() {

  const { height, width } = useWindowDimensions();

  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [match, setMatch] = useState("");
  const [ imgLoading, setImgLoading] = useState(true)
  const repoData = DataProvider(
    "https://triptoafsin.github.io/API-Host/myProjects.json"
  );
  console.log(repoData);

  useEffect(() => {
    if (repoData !== null) {
      setLoading(false);
      console.log("setLoading false now");
      searchQuery(repoData);
      console.log(query);
    }
  }, [repoData, query]);

  //regex
  const matchList = document.getElementById("card-container");

  const searchQuery = libs => {
    try{
      let matches = libs.filter(lib => {
        const regex = new RegExp(`${query}`, "gi"); // ^: will search for which results starts with , gi:case insensitive search,RegExp: Regular Expression
        // const illegalSyntax = "</>"
        // if(illegalSyntax.match(regex)){
        //   console.log("🔴 Illegal syntax found !")
        // }
        return (
          lib.name.match(regex) ||
          lib.about.match(regex) ||
          lib.terms.match(regex) 
        );
      });
      if (query.length > 0) {
        outputHtml(matches);
        setMatch(matches.length);
        console.log(matches);
      }
    }catch(err){
        console.log(err)
    }
  };

  const outputHtml = matches => {
    if (matches.length > 0) {
      const html = matches
        .map(
          match => `
            <div class="card-vertical greyGradient floatIn" key={${match.id}}>
                    <img src=${match.img} alt="" class="card-img"/>
                    <p class="card-title txt-xl">${match.name}</p>
                    <p class="card-txt">${match.about}</p>
                    ${match.techUsed.map(tech => {
                      return `<p class="green rounded tag mt1 ml1" key={${match.id}+${tech}}>${tech}</p>`;
                    })}
                    <a class="card-btn pad2 right blue" href=${
                      match.link
                    } target="_blank">Learn more...</a>
                </div>
            `
        )
        .join("");

      console.log(html);
      matchList.innerHTML = html;
    } else {
      try {
        matchList.innerHTML = `<h1>No results 😭</h1>`;
      } catch (error) {
        return;
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
         <SpinnerLoader></SpinnerLoader>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{pageTitle}</title>
        </Helmet>
        <div>
          <div className="center-self mb4 mt2 pad2">
            <input
              className="rounded shadow txt-lg pad10"
              placeholder="Search..."
              onChange={e => setQuery(e.target.value)}
              value={query}
              style={{ width: "320px", maxWidth: "90%" }}
            ></input>
          </div>
          <div className="card-container" id="card-container">
            {repoData.map(element => {
              return (
                <div
                  className={"card-vertical floatIn greyGradient"}
                  key={element.id}
                >
                  {imgLoading ? (
                    <SkeletonTheme color="#cbdbf5" highlightColor="#616469" baseColor="#1e1e1e">
                      <Skeleton
                        width={width < 600 ? "95%" : "94%"}
                        height={width < 600 ? 180 : 180}
                        duration={1}
                        className="mt1 mr1 ml1"
                      />
                    </SkeletonTheme>
                  ) : (
                    ""
                  )}
                  <img src={element.img} alt="" className="card-img" onLoad={() => setImgLoading(false)}/>
                  <p className="card-title txt-xl">{element.name}</p>
                  <div className="mt4">
                    <p className="card-txt">{element.about}</p>
                    {element.techUsed.map(tech => {
                      //console.log(`${element.id}-${tech}`)
                      return (
                        <p
                          className="green rounded tag mt1 ml1"
                          key={`${element.id}-${tech}`}
                        >
                          {tech}
                        </p>
                      );
                    })}

                    <a
                      className="card-btn pad2 right blue"
                      href={element.link}
                      target="_blank"
                    >
                      Learn more...
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="row pad4 center-self mt4">
          <a
            href="https://github.com/TriptoAfsin"
            className="button center-self txt-lg bold blueGradient"
            target="_blank"
          >
            👉 Github
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default React.memo(Projects);
