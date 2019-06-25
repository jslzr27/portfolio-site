import React, { Component } from "react";
import "./style.css";
import htl from "../../SKILLS/HTML.png";
import csl from "../../SKILLS/CSS3.png";
import jsl from "../../SKILLS/JAVASCRIPT.png";
import jql from "../../SKILLS/JQUERY.png";
import mtl from "../../SKILLS/MATERIALIZE.webp";
import btl from "../../SKILLS/BOOTSTRAP.svg";
import rel from "../../SKILLS/REACT.png";
import nol from "../../SKILLS/NODE JS.png";
import exl from "../../SKILLS/EXPRESS.png";
import msl from "../../SKILLS/MYSQL.png";
import monl from "../../SKILLS/MONGO.png";
import firl from "../../SKILLS/FIREBASE.png";
import gtl from "../../SKILLS/GIT.png";
import ghl from "../../SKILLS/GITHUB.png";
import hel from "../../SKILLS/HEROKU.png";
import npml from "../../SKILLS/NPM.png";


class AboutPage extends Component {
    render() {
        return (
            <div>
                <h1>About Me</h1>
            <div className="section" id="about">
                <div id="aboutBox">
                    <h3>Who am I?</h3>
                    <p>I am a web developer for a passion for building things with the end user in mind. I completed a coding bootcamp where I learned the MERN stack and also worked with other developers in the realization of projects and different tasks that were assigned to us. I enjoy turning complex problems into simple solutions. When I am not coding, you’ll find me cooking, working out or playing soccer.</p>
                </div>
                <div id="aboutBox">
                    <h3>Why web development?</h3>
                    <p>I chose web development because of the opportunity that I can bring me to create anything I would like to and also because It will facilitate others with solutions to their problems and needs, thus creating a more enjoyable life thanks to the help of technology.</p>
                </div>
            </div>

            <h1>Skills</h1>
            <div className="skill-card">
                <h2>Front-End</h2>
                <div className="skills">
                    <li><img src={htl} alt="HTML"></img>HTML</li>
                    <li><img src={csl} alt="CSS"></img>CSS</li>
                    <li><img src={jsl} alt="Javascript"></img>Javascript</li>
                    <li><img src={jql} alt="jQuery"></img>jQuery</li>
                    <li><img src={mtl} alt="Materialize"></img>Materialize</li>
                    <li><img src={btl} alt="Bootsrap"></img>Bootstrap</li>
                    <li><img src={rel} alt="React"></img>React</li>
                </div>
            </div>
            <div className="skill-card">
                <h2>Back-End</h2>
                <div className="skills">
                    <li><img src={nol} alt="Node"></img>Node</li>
                    <li><img src={exl} alt="Express"></img>Express</li>
                    <li><img src={msl} alt="MySQL"></img>MySQL</li>
                    <li><img src={monl} alt="MongoDB"></img>MongoDB</li>
                    <li><img src={firl} alt="Firebase"></img>Firebase</li>
                </div>
            </div>
            <div className="skill-card">
                <h2>Other</h2>
                <div className="skills">
                    <li><img src={gtl} alt="Git"></img>Git</li>
                    <li><img src={ghl} alt="Github"></img>Github</li>
                    <li><img src={hel} alt="Heroku"></img>Heroku</li>
                    <li><img src={npml} alt="NPM"></img>NPM</li>
                </div>
            </div>

            </div>

        )
    }
};

export default AboutPage;