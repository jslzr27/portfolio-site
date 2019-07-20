import React, { Component } from "react";
import "./style.css";

import timi from "../../portfolio things/time 2.png";
import fott from "../../portfolio things/clickygame 54.png";
import pets from "../../portfolio things/pets.png";
import burg from "../../portfolio things/burger 4.png";
import bama from "../../portfolio things/tablebamazon.png";
import liri from "../../portfolio things/liri1 313.png";
import mme from "../../portfolio things/movie 118.png";
import trai from "../../portfolio things/trainTime 0.png";
import crys from "../../portfolio things/crystalCollect 0.png";

class WorkPage extends Component {
    render() {
        return(
            <div className="section" id="work">
                <h1>My Projects</h1>
                
                <div className="workList">
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
                    <li className="card">
                        <div className="content">
                        <div className="front">
                            <img src={burg} className="workImg" alt="Burger App"></img>
                        </div>
                        <div className="back">
                            <h3>Burger App</h3>
                            <p>With this app you can create your own burger and eat it too!. Don't want to eat it? Then delete it!.</p>
                            <a className="link-btn" id="gh-btn" href="https://github.com/jslzr27/Express-Handlebars-Burger" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> Code</a>
                            <a className="link-btn" id="lv-btn" href="https://burger-app-jrss.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i className="fas fa-laptop"></i> Live</a>
                        </div>
                        </div>
                    </li>
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
                    <li className="card">
                        <div className="content">
                        <div className="front">
                            <img src={liri} className="workImg" alt="Liri Bot"></img>
                        </div>
                        <div className="back">
                            <h3>Liri Bot</h3>
                            <p>LIRI is like iPhone's SIRI. LIRI will be a command line node app that takes in parameters and gives you back data.</p>
                            <a className="link-btn" id="gh-btn" href="https://github.com/jslzr27/Liri-bot" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> Code</a>
                        </div>
                        </div>
                    </li>
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
                    <li className="card">
                        <div className="content">
                        <div className="front">
                            <img src={crys} className="workImg" alt="Crystals Game"></img>
                        </div>
                        <div className="back">
                            <h3>Crystals Game</h3>
                            <p>You have 4 crystal and each has a number. Select the crystals to match the goal number. </p>
                            <a className="link-btn" id="gh-btn" href="https://github.com/jslzr27/Crystals-Game" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> Code</a>
                            <a className="link-btn" id="lv-btn" href="https://jslzr27.github.io/Crystals-Game/" target="_blank" rel="noopener noreferrer"><i className="fas fa-laptop"></i> Live</a>
                        </div>    
                        </div>
                    </li>
                </div>
            </div>
        )
    }
};

export default WorkPage;