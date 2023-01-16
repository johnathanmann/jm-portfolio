import React from "react";
import arrow from "../assets/imgs/arrow.png";
import location from "../assets/imgs/location-icon.png";
import html from "../assets/imgs/html-icon.png";
import css from "../assets/imgs/css-icon.png";
import js from "../assets/imgs/js-icon.png";
import react from "../assets/imgs/react-icon.png";
import mongo from "../assets/imgs/mongo-icon.png";

export default function MainPage({handlePageChange }){
    return(
        <div className="container-white">
        <div id="header" className="center">
            <ul id="nav-items">
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#portfolio">PORTFOLIO</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
            <h1 className="big-text">JOHNATHAN <br/>MANN</h1>
            <h2>FULLSTACK DEVELOPER</h2>
            <a href="#about"><img src={arrow} alt="Red arrow pointing down"/></a>
        </div>
        {/* <button onClick={() => handlePageChange("OtherPage")}>Change Page</button> */}
        <h1 className="big-text section-header" >01/ About Me</h1>
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
        </div>
    )
}