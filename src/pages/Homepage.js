import React from "react";
import location from "../assets/imgs/location-icon.png";
import html from "../assets/imgs/html-icon.png";
import css from "../assets/imgs/css-icon.png";
import js from "../assets/imgs/js-icon.png";
import react from "../assets/imgs/react-icon.png";
import mongo from "../assets/imgs/mongo.png";
import node from "../assets/imgs/node.png";
import seared from "../assets/imgs/seared/seared.png";
import sprite from "../assets/imgs/sprite/sprite-planner.png";
import media from "../assets/imgs/media/media-query.png";
import scribbled from "../assets/imgs/scribbled/scribbled.png";
import portrait from "../assets/imgs/portrait.png";
import "../styles/styles.css";
import "../styles/home.css";

export default function Homepage(){
    return(
        <div className="container">
            <div className="row d-flex align-items-center" id="header">
                <div className="col-md-6">
                    <p id="title">Hi I'm <br /> Johnny<br/></p>
                    <p id="subheading">Fullstack<br />Developer<br/></p>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" id="portrait" src={portrait} />
                </div>
            </div>
            <div className="row">
                <h1 className="header">01/ About Me</h1>
                <p className="p-text pt-3">My name is Johnathan Mann and I am a fullstack website developer with a background in the service industry. I'm problem solver with a drive to learn looking to make responsive, accessible, and functional websites. I have the most fun picking colors and layouts while also trying out new technologys. <br /> <br /> When I'm not coding oyu can find me playing video games or checking out a new coffee shop. I'm always look to my day to day life for inspiration and new ideas.</p>
                <div id="icons">
                    <div className="icon"><img alt="HTML 5 icon" src={html} /><p className="p-text">HTML</p></div>
                    <div className="icon"><img alt="CSS 3 icon" src={css} /><p className="p-text">CSS</p></div>
                    <div className="icon"><img alt="JavaScript icon" src={js} /><p className="p-text">JavaScript</p></div>
                    <div className="icon"><img alt="React icon" src={react} /><p className="p-text">React</p></div>
                    <div className="icon"><img alt="MongoDB icon" src={mongo} /><p className="p-text">MongoDb</p></div>
                    <div className="icon"><img alt="Node.js icon" src={node} /><p className="p-text">Node.js</p></div>
                </div>
            </div>
        </div>
    )
}