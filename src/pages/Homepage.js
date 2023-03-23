import React from "react";
import location from "../assets/imgs/location-icon.png";
import html from "../assets/imgs/html-icon.png";
import css from "../assets/imgs/css-icon.png";
import js from "../assets/imgs/js-icon.png";
import react from "../assets/imgs/react-icon.png";
import mongo from "../assets/imgs/mongo.png";
import node from "../assets/imgs/node.png";
import portrait from "../assets/imgs/portrait.png";
import envelope from "../assets/imgs/envelope.jpg";
import barbecue from "../assets/imgs/barbecue.jpg";
import projects from "../assets/projects.json";
import computer from "../assets/imgs/computer.jpg";
import planner from "../assets/imgs/planner.jpg";
import "../styles/styles.css";
import "../styles/home.css";

let icons = {envelope, barbecue, computer, planner}

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
                <h1 className="header" id="about">01/ About Me</h1>
                <p className="p-text pt-3">My name is Johnathan Mann and I am a fullstack website developer with a background in the service industry. I'm problem solver with a drive to learn looking to make responsive, accessible, and functional websites. I have the most fun picking colors and layouts while also trying out new technologys. <br /> <br /> When I'm not coding oyu can find me playing video games or checking out a new coffee shop. I'm always looking to my day to day life for inspiration and new ideas.</p>
                <div id="icons">
                    <div className="icon"><img alt="HTML 5 icon" src={html} /><p className="p-text">HTML</p></div>
                    <div className="icon"><img alt="CSS 3 icon" src={css} /><p className="p-text">CSS</p></div>
                    <div className="icon"><img alt="JavaScript icon" src={js} /><p className="p-text">JavaScript</p></div>
                    <div className="icon"><img alt="React icon" src={react} /><p className="p-text">React</p></div>
                    <div className="icon"><img alt="MongoDB icon" src={mongo} /><p className="p-text">MongoDb</p></div>
                    <div className="icon"><img alt="Node.js icon" src={node} /><p className="p-text">Node.js</p></div>
                </div>
            </div>
            <div className="row">
                <h1 className="header pt-3" id="projects">02/ Projects</h1>
            </div>
            {projects.map((project, index)=>{
            return <div className="row project">
            <div className="col-8 my-auto">
                <div className="project-text">
                    <h1>{projects[index].name}</h1><p>{projects[index].word1}</p><p>{projects[index].word2}</p><p>{projects[index].word3}</p>
                </div>
            </div>
            <div className="col-4">
                <div className="project-img">
                    <img className="img-fluid" src={icons[projects[index].image]} alt={projects[index].alt}/>
                </div>
            </div>
        </div>
            })}
        </div>
    )
}