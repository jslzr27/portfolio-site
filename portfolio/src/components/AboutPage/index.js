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
import sass from "../../SKILLS/sass.png";
import php from "../../SKILLS/php.png";


class AboutPage extends Component {
    render() {
        return (
            <div className="aboutPage" id="about">
                <h1>About Me</h1>
            <div className="my-section">
                <table className='my-info' cellPadding='0' cellSpacing='0'>
                    <tr>
                        <td>
                            <table className="my-info-table" cellPadding='0' cellSpacing='0'>
                                <tr>
                                    <td>
                                        <h3>Who am I?</h3>
                                        <p>I am a web developer for a passion for building things with the end user in mind. I completed a coding bootcamp where I learned the MERN stack and also worked with other developers in the realization of projects and different tasks that were assigned to us. I enjoy turning complex problems into simple solutions. When I am not coding, you’ll find me cooking, working out or playing soccer.</p>
                                    </td>
                                </tr>
                            </table>
                            <table className="my-info-table" cellPadding='0' cellSpacing='0'>
                                <td>
                                    <h3>Why web development?</h3>
                                    <p>I chose web development because of the opportunity that I can bring me to create anything I would like to and also because It will facilitate others with solutions to their problems and needs, thus creating a more enjoyable life thanks to the help of technology.</p>
                                </td>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>

            <h1>Skills</h1>
            <div className="skill-card">
                <h2>Front-End</h2>
                <div className="skills">
                    <table className='table' id="asdfgd " cellPadding='0' cellSpacing='0'>
                        <tr>
                            <td>
                                <img id="logo-html" src={htl} alt="HTML"></img>
                                <p>HTML</p>
                            </td>
                            <td>
                                <img id="logo-css" src={csl} alt="CSS"></img>
                                <p>CSS</p>
                            </td>
                            <td>
                                <img id="logo-js" src={jsl} alt="Javascript"></img>
                                <p>Javascript</p>
                            </td>
                            <td>
                                <img id="logo-jquery" src={jql} alt="jQuery"></img>
                                <p>jQuery</p>
                            </td>
                            <td>
                                <img id="logo-sass" src={sass} alt="Sass"></img>
                                <p>Sass</p>
                            </td>
                            <td>
                                <img id="logo-boot" src={btl} alt="Bootsrap"></img>
                                <p>Bootstrap</p>
                            </td>
                            <td>
                                <img id="logo-mat" src={mtl} alt="Materialize"></img>
                                <p>Materialize CSS</p>
                            </td>
                            <td>
                                <img id="logo-react" src={rel} alt="React"></img>
                                <p>React</p>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="skill-card">
                <h2>Back-End</h2>
                <div className="skills">
                <table className='table' id="back-end" cellPadding='0' cellSpacing='0'>
                        <tr>
                            <td>
                                <img id="logo-node" src={nol} alt="Node"></img>
                                <p>Node</p>
                            </td>
                            <td>
                                <img id="logo-express" src={exl} alt="Express"></img>
                                <p>Express</p>
                            </td>
                            <td>
                                <img id="logo-mysql" src={msl} alt="MySQL"></img>
                                <p>MySQL</p>
                            </td>
                            <td>
                                <img id="logo-mongo" src={monl} alt="MongoDB"></img>
                                <p>MongoDB</p>
                            </td>
                            <td>
                                <img id="logo-fire" src={firl} alt="Firebase"></img>
                                <p>Firebase</p>
                            </td>
                            <td>
                                <img id="logo-php" src={php} alt="PHP"></img>
                                <p>PHP</p>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="skill-card">
                <h2>Other</h2>
                <div className="skills">
                <table className='table' id="others" cellPadding='0' cellSpacing='0'>
                        <tr>
                            <td>
                                <img id="logo-git" src={gtl} alt="Git"></img>
                                <p>Git</p>
                            </td>
                            <td>
                                <img id="logo-gh" src={ghl} alt="Github"></img>
                                <p>Github</p>
                            </td>
                            <td>
                                <img id="logo-her" src={hel} alt="Heroku"></img>
                                <p>Heroku</p>
                            </td>
                            <td>
                                <img id="logo-npm" src={npml} alt="NPM"></img>
                                <p>NPM</p>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

            </div>

        )
    }
};

export default AboutPage;