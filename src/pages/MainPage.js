import React from "react";
import arrow from "../assets/imgs/arrow.png";
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

export default function MainPage({handlePageChange }){
    return(
        <div className="container-white">
        <div id="header" className="center">
            <ul id="nav-items">
                <li><a href="#about-link">ABOUT</a></li>
                <li><a href="#projects">PROJECTS</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
            <h1 className="big-text">JOHNATHAN <br/>MANN</h1>
            <h2>FULLSTACK DEVELOPER</h2>
            <a href="#about-link"><img src={arrow} alt="Red arrow pointing down"/></a>
        </div>
        <h1 className="big-text section-header" id="about-link">01/ About Me</h1>
        <div id="about">
            <img id="profile" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"/>
            <p><span><img id="location" src={location}/>LEE'S SUMMIT, MO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HE/HIM </span><br/><br/>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA PARIATUR. </p>
        <div id="icons" className="center">
            <img className="icon" alt="Black HTML5 icon" src={html}/>
            <img className="icon" alt="Black CSS3 icon" src={css}/>
            <img className="icon" alt="Black JavaScript icon" src={js}/>
            <img className="icon" alt="Black React icon" src={react}/>
            <img className="icon" alt="Black MongoDb icon" src={mongo}/>
        </div>
        </div>
        <h1 className="big-text section-header" >02/ PROJECTS</h1>
        <div id="projects">
            <div className="project-item">
                <p onClick={() => handlePageChange("Sprite")}><span className="big-text">SPRITE PLANNER</span>MERN STACK PROJECT</p>
                <img onClick={() => handlePageChange("Sprite")}src={sprite} alt="Screenshot of Sprite Planner website"/>
            </div>
            <div className="project-item">
                <p onClick={() => handlePageChange("Seared")}><span className="big-text">SEARED</span>FULLSTACK GROUP PROJECT</p>
                <img onClick={() => handlePageChange("Seared")}src={seared} alt="Screenshot of Seared website"/>
            </div>
            <div className="project-item">
                <p onClick={() => handlePageChange("MediaQuery")}><span className="big-text">MEDIA QUERY</span>MERN STACK PROJECT</p>
                <img onClick={() => handlePageChange("MediaQuery")}src={media} alt="Screenshot of Media Query website"/>
            </div>
            <div className="project-item">
                <p onClick={() => handlePageChange("Scribbled")}><span className="big-text-2">SCRIBBLED</span>FRONTEND DRAWING APP</p>
                <img onClick={() => handlePageChange("Scribbled")}src={scribbled} alt="Screenshot of Media Query website"/>
            </div>
        </div>
        <h1 className="big-text section-header" >03/ CONTACT</h1>
        <div id="contact">
            <h1>CONTACT@JOHNATHANMANN.COM</h1>
        </div>
        </div>
    )
}