import React, { Component } from "react";
import "./style.css";

import timi from "../../portfolio things/time.gif";
import fott from "../../portfolio things/clickygame.gif";
import pets from "../../portfolio things/pets.gif";
import sub from "../../portfolio things/subway.gif";
import bama from "../../portfolio things/tablebamazon.png";
import amz from "../../portfolio things/amazon.gif";
import mme from "../../portfolio things/movie.gif";
import trai from "../../portfolio things/traintime.gif";
import cryp from "../../portfolio things/bitprofits.gif";

class WorkPage extends Component {
    render() {
        return(
            <div className="section" id="work">
                <h1>My Projects</h1>
                
                <div className="workList">
                    {/* number 1 */}
                    <li className="card">
                        <div className="content">
                        <div className="front">
                            <img src={timi} className="workImg" alt="time management"></img>
                        </div>
                        <div className="back">
                            <h3>Time Management App</h3>
                            <p>This app was created to help people track and budget their time so that they can maximize their productivity.</p>
                            <a className="link-btn" id="gh-btn" href="https://github.com/jslzr27/MERN-Time-Management" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> Code</a>
                            <a className="link-btn" id="lv-btn" href="https://time-management-app-jstz.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i className="fas fa-laptop"></i> Live</a>
                        </div>
                        </div>  
                    </li>
                    {/* number 2 */}
                    <li className="card">
                        <div className="content">
                        <div className="front">
                            <img src={cryp} className="workImg" alt="Crypto Profits"></img>
                        </div>
                        <div className="back">
                            <h3>Crypto Profits</h3>
                            <p>This app lets you find out how much profit you have made from your Bitcoin investment. </p>
                            <a className="link-btn" id="gh-btn" href="https://github.com/jslzr27/crypto-profits-complete" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> Code</a>
                            <a className="link-btn" id="lv-btn" href="https://crypto-profits-jrss.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i className="fas fa-laptop"></i> Live</a>
                        </div>    
                        </div>
                    </li>
                    {/* number 3 */}
                    <li className="card">
                        <div className="content">
                        <div className="front">
                            <img src={pets} className="workImg" alt="Petspurration"></img>
                        </div>
                        <div className="back">
                            <h3>Petspurration</h3>
                            <p>This website allows users to connect with pets that are up for adoption, and then adopt the pets that they would love to have.</p>
                            <a className="link-btn" id="gh-btn" href="https://github.com/jslzr27/PetsPurration" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> Code</a>
                            <a className="link-btn" id="lv-btn" href="https://boiling-everglades-73840.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i className="fas fa-laptop"></i> Live</a>
                        </div>
                        </div>
                    </li>
                    {/* number 4 */}
                    <li className="card">
                        <div className="content">
                        <div className="front">
                            <img src={fott} className="workImg" alt="Football clicky game"></img>
                        </div>
                        <div className="back">
                            <h3>Football Clicky Game</h3>
                            <p>This website uses React to render elements in the page. Select a team and beat your own score!.</p>
                            <a className="link-btn" id="gh-btn" href="https://github.com/jslzr27/Clicky-Game" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> Code</a>
                            <a className="link-btn" id="lv-btn" href="https://jslzr27.github.io/Clicky-Game/" target="_blank" rel="noopener noreferrer"><i className="fas fa-laptop"></i> Live</a>
                        </div>
                        </div>
                    </li>
                    {/* number 5 */}
                    <li className="card">
                        <div className="content">
                        <div className="front">
                            <img src={mme}  className="workImg" alt="Movie Music Enthusiast" data-text="mme2"></img>
                        </div>
                        <div className="back">
                            <h3>Movie Music Enthusiast</h3>
                            <p>Everyone likes music, and most everyone likes movies, so this app was born as a means to bridge the two.</p>
                            <a className="link-btn" id="gh-btn" href="https://github.com/jslzr27/Movie-Music-Enthusiasts" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> Code</a>
                            <a className="link-btn" id="lv-btn" href="https://jslzr27.github.io/Movie-Music-Enthusiasts/" target="_blank" rel="noopener noreferrer"><i className="fas fa-laptop"></i> Live</a>
                        </div>    
                        </div>
                    </li>
                    {/* number 6 */}
                    <li className="card">
                        <div className="content">
                        <div className="front">
                            <img src={sub} className="workImg" alt="Subway Email"></img>
                        </div>
                        <div className="back">
                            <h3>Subway Receipt Email</h3>
                            <p>This is a recreation of an email from an online order from Subway.</p>
                            <a className="link-btn" id="gh-btn" href="https://github.com/jslzr27/Subway-order-email" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> Code</a>
                            <a className="link-btn" id="lv-btn" href="https://jslzr27.github.io/Subway-order-email/" target="_blank" rel="noopener noreferrer"><i className="fas fa-laptop"></i> Live</a>
                        </div>
                        </div>
                    </li>
                    {/* number 7 */}
                    <li className="card">
                        <div className="content">
                        <div className="front">
                            <img src={trai} className="workImg" alt="Train Time"></img>
                        </div>
                        <div className="back">
                            <h3>Train Time</h3>
                            <p>This is a train schedule application that incorporates Firebase to host train data and updates information for the trains in real time.</p>
                            <a className="link-btn" id="gh-btn" href="https://github.com/jslzr27/Train-time" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> Code</a>
                            <a className="link-btn" id="lv-btn" href="https://jslzr27.github.io/Train-time/" target="_blank" rel="noopener noreferrer"><i className="fas fa-laptop"></i> Live</a>
                        </div>
                        </div>
                    </li>
                    {/* number 8 */}
                    <li className="card">
                        <div className="content">
                        <div className="front">
                            <img src={bama} className="workImg" alt="Node inventory management"></img>
                        </div>
                        <div className="back">
                            <h3>Node + MySQL Inventory Management</h3>
                            <p>This is a Node app that lets you order products through the terminal by connecting with a MySQL database.</p>
                            <a className="link-btn" id="gh-btn" href="https://github.com/jslzr27/Node-My-SQL" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> Code</a>
                        </div>
                        </div>
                    </li>
                    {/* number 9 */}
                    <li className="card">
                        <div className="content">
                        <div className="front">
                            <img src={amz} className="workImg" alt="Liri Bot"></img>
                        </div>
                        <div className="back">
                            <h3>Amazon Prime Email</h3>
                            <p>This is a recreation of an email marketing campain by Amazon.</p>
                            <a className="link-btn" id="gh-btn" href="https://github.com/jslzr27/amazon-prime-email" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> Code</a>
                            <a className="link-btn" id="lv-btn" href="https://jslzr27.github.io/amazon-prime-email/" target="_blank" rel="noopener noreferrer"><i className="fas fa-laptop"></i> Live</a>
                        </div>
                        </div>
                    </li>
                </div>
            </div>
        )
    }
};

export default WorkPage;