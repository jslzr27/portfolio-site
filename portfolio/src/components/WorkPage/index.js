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
                    <li><img src={timi} className="workImg" alt="time management"></img>
                    <div className="overlay">
                        <div className="text">Hello World</div></div>Time Management App</li>
                    <li>
                        <div>
                        <img src={fott} className="workImg" alt="Football clicky game"></img>Football Clicky Game
                        </div>
                    </li>
                    <li><img src={pets} className="workImg" alt="Petspurration"></img>Petspurration</li>
                    <li><img src={burg} className="workImg" alt="Burger App"></img>Burger App</li>
                    <li><img src={bama} className="workImg" alt="Node inventory management"></img>Node + MySQL Inventory Management</li>
                    <li><img src={liri} className="workImg" alt="Liri Bot"></img>Liri Bot</li>
                    <li><img src={mme}  className="workImg" alt="Movie Music Enthusiast" data-text="mme2"></img>Movie Music Enthusiast</li>
                    <li><img src={trai} className="workImg" alt="Train Time"></img>Train Time</li>
                    <li><img src={crys} className="workImg" alt="Crystals Game"></img>Crystals Game</li>
                </div>
            </div>
        )
    }
};

export default WorkPage;