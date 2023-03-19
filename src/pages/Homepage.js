import React from "react";
import location from "../assets/imgs/location-icon.png";
import html from "../assets/imgs/html-icon.png";
import css from "../assets/imgs/css-icon.png";
import js from "../assets/imgs/js-icon.png";
import react from "../assets/imgs/react-icon.png";
import mongo from "../assets/imgs/mongo-icon.png";
import seared from "../assets/imgs/seared/seared.png";
import sprite from "../assets/imgs/sprite/sprite-planner.png";
import media from "../assets/imgs/media/media-query.png";
import scribbled from "../assets/imgs/scribbled/scribbled.png";
import portrait from "../assets/imgs/portrait.png";
import "../styles/styles.css";
import "../styles/home.css";

export default function Homepage(){
    return(
        <div className="container-flex">
            <div className="row d-flex justify-content-center" id="header">
                <div className="col">
                    <p id="title">Hi I'm <br /> Johnny<br/> <p id="subheading">Fullstack<br />Developer<br/></p></p>
                </div>
                <div className="col mx-auto">
                    <img id="portrait" src={portrait} />
                </div>
            </div>
        </div>
    )
}