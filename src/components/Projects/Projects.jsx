import React from "react";
import "./Projects.scss";
import corestrat from "../../images/corestrat.jpg";
import sellsafe from "../../images/sellsafe.jpg";

function Projects() {
  return (
    <div className="Projects section__margin" id="projects">
      <h2 className="Projects__header">Projects</h2>
      <div className="Projects__setting">
        <div className="Projects__setting-feature">
          <div className="Projects__setting-feature_box shadow">
            <img src={sellsafe} alt="Sell Safe Website" />
            <a href="https://wesellsafe.com" rel="noreferrer" target="_blank">
              <button className="Projects__setting-feature_box-button">
                SellSafe
              </button>
            </a>
          </div>
          <div className="Projects__setting-feature_box shadow">
            <img src={corestrat} alt="Core Strategies Website" />
            <a href="https://corestrat.net" rel="noreferrer" target="_blank">
              <button className="Projects__setting-feature_box-button">
                Core Strategies
              </button>
            </a>
          </div>
        </div>
        <div className="Projects__setting-text">
          <div className="Projects__setting-text_box">
            <h4 className='Projects__setting-text_box-header'>
              SellSafe
            </h4>
            <p className="Projects__setting-text_box-content">Developed 
            in React. Designed to play off the automation aspect of what the 
            company offers. Start-up business that is wanting to onboard clients
            before a major launch. Helped create marketing language used in website.
            Designed the site first using Figma. Based on tutorial, customized for client's
            requests and vision.</p>
          </div>
          <div className="Projects__setting-text_box">
            <h4 className='Projects__setting-text_box-header'>
              Core Strategies
            </h4>
            <p className="Projects__setting-text_box-content">Developed in React. 
            Small business that consults with industrial credit in business to business 
            markets. Fully designed and built by me. Customer wanted to look for something
            that was modern, but also appealing and that stood out. Created CSS Design 
            Library for the project. </p>
          </div>
        </div>
      </div>
    </div>

    // <div className="projects section__margin" id="projects">
    //   <h2 className="projects__header">My Projects</h2>
    //   <div className="project__section">

    //     <div className="cards shadow">

    //       <img src={corestrat2} alt="" />
    //       <a href="https://corestrat.net" rel="noreferrer" target="_blank">
    //         <button className="projects__button">See Work</button>
    //       </a>
    //     </div>

    //     <div className="cards shadow">
    //       <img src={sellsafe} alt="" />
    //       <a href="https://wesellsafe.com" rel="noreferrer" target="_blank">
    //         <button className="projects__button">See Work</button>{" "}
    //       </a>
    //     </div>

    //      <ul className="SolarSystem__list" id="descriptions">
    //       <li>
    //         <h2 id="sun">Front End</h2>
    //         <p className="SolarSystem__list-box">
    //           HTML | CSS | JavaScript | Figma | React | ThreeJS | React-Three-Fiber |
    //           SASS | Bootstrap | TailwindCSS | NextJS |
    //         </p>
    //       </li>
    //     </ul>

    //      <div className="cards">
    //       <img src={sellsafe} alt="" />
    //       <button>See Work</button>
    //     </div>

    //     <div className="cards">
    //       <img src={sellsafe} alt="" />
    //       <button>See Work</button>
    //     </div>

    //     <div className="cards">
    //       <img src={corestrat2} alt="" />
    //       <button>See Work</button>
    //     </div>

    //     <div className="cards">
    //       <img src={corestrat2} alt="" />
    //       <button>See Work</button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Projects;
