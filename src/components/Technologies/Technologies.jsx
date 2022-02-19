import React from "react";
import "./Technologies.scss";
import { FaCss3, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { GiAstronautHelmet } from "react-icons/gi";
import { DiJavascript1 } from "react-icons/di";
import { SiFirebase } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";

function Technologies() {
  return (
    <section className="SolarSystem section__padding " id="stack">
      <div className="SolarSystem__container ">
        <h1 className="SolarSystem__container-header ">Stack and Skills</h1>
        {/* <p className="SolarSystem__container-header-content">
          
        </p>
        <p className="SolarSystem__container-header-content">
          The sun keeps the solar system in order, does your cash flow do the
          same for your business?
        </p> */}
      </div>
      <div className="SpinnerBox">
        <div className="solar-system">
          <div className="saturn-orbit orbit">
            <div className="planet saturn">
              <SiNextdotjs className="planet_icon" />
            </div>
            <div className="jupiter-orbit orbit">
              <div className="planet jupiter">
                <FaSass className="planet_icon" />{" "}
              </div>
              <div className="mars-orbit orbit">
                <div className="planet mars">
                  <DiJavascript1 className="planet_icon" />{" "}
                </div>
                <div className="earth-orbit orbit">
                  <div className="planet earth">
                    <FaReact className="planet_icon" />
                  </div>
                  <div className="venus-orbit orbit">
                    <div className="planet venus">
                      <FaCss3 className="planet_icon" />
                    </div>
                    <div className="mercury-orbit orbit">
                      <div className="planet mercury">
                        <FaHtml5 className="planet_icon" />{" "}
                      </div>
                      <div className="sun">
                        <GiAstronautHelmet className="planet_icon"></GiAstronautHelmet>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='SolarSystem__graphic'>
        <ul className="solarsystem">
          <li className="sun"><a href="#sun"><span>Sun</span></a></li>
          <li className="mercury"><a href="#mercury"><span>Mercury</span></a></li>
          <li className="venus"><a href="#venus"><span>Venus</span></a></li>
          <li className="earth"><a href="#earth"><span>Earth<span className="moon"> &amp; Moon</span></span></a></li>
          <li className="mars"><a href="#mars"><span>Mars</span></a></li>
          <li className="asteroids_meteorids"><span>Asteroids &amp; Meteorids</span></li>
          <li className="jupiter"><a href="#jupiter"><span>Jupiter</span></a></li>
          <li className="saturn"><a href="#saturn"><span>Saturn &amp; <span className="ring">Ring</span></span></a></li>
          <li className="uranus"><a href="#uranus"><span>Uranus</span></a></li>
          <li className="neptune"><a href="#neptune"><span>Neptune</span></a></li>
          <li className="pluto"><a href="#pluto"><span>Pluto</span></a></li>
        </ul>
      </div> */}

      <ul className="SolarSystem__list" id="descriptions">
        <li>
          <h2 id="sun">Front End</h2>
          <p className="SolarSystem__list-box">
            HTML | CSS | JavaScript | Figma | React | ThreeJS | React-Three-Fiber | 
            SASS | Bootstrap | TailwindCSS | NextJS | 
          </p>
        </li>

        <li>
          <h2 id="mercury">Back End</h2>
          <p className="SolarSystem__list-box">
            Python | Flask | Pandas | PostgreSQL | Firebase/Firestore |
            ElephantSQL
          </p>
        </li>

        <li>
          <h2 id="venus">Third Party</h2>
          <p className="SolarSystem__list-box">
            GitHub | Firebase/Firestore | Hostinger 
          </p>
        </li>

        <li>
          <h2 id="earth">Soft Skills</h2>
          <p className="SolarSystem__list-box">
            Sales | Leadership | Customer Service | Business Development | Account Management | 
            Coaching | Public Speaker | Writer
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Technologies;
