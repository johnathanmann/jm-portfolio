import React from "react";
import { Link } from "react-router-dom";
import { RoughNotation } from "react-rough-notation";
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
import computer2 from "../assets/imgs/computer-2.jpg";
import cava from "../assets/imgs/cava.jpg";
import "../styles/styles.css";
import "../styles/home.css";

let icons = {envelope, barbecue, computer, computer2, cava}

export default function Homepage(){
    return(
        <div className="container">
            <header className="row d-flex align-items-center" id="header">
                <div className="col-md-6">
                <p id="title">Hi I'm <br /> <RoughNotation strokeWidth="2" type="underline" color="#ddd7d5" show="true" padding={10} >Johnny</RoughNotation><br/></p>
                    <p id="subheading">Fullstack<br />Developer<br/></p>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" id="portrait" src={portrait} alt="Simple drawing of Johnny"/>
                </div>
            </header>
            <article className="row">
                <h1 className="header" id="about">01/ About Me</h1>
                <p className="p-text pt-3">My name is Johnathan Mann and I am a fullstack website developer with a background in the service industry. I'm problem solver with a drive to learn looking to make responsive, accessible, and functional websites. I have the most fun picking colors and layouts while also trying out new technologys. <br /> <br /> I'm always looking to my day to day life for inspiration and new ideas. When I'm not coding you can find me playing video games or checking out a new coffee shop.</p>
                <section id="icons">
                    <div className="icon"><img alt="HTML 5 icon" src={html} /><p className="p-text">HTML</p></div>
                    <div className="icon"><img alt="CSS 3 icon" src={css} /><p className="p-text">CSS</p></div>
                    <div className="icon"><img alt="JavaScript icon" src={js} /><p className="p-text">JavaScript</p></div>
                    <div className="icon"><img alt="React icon" src={react} /><p className="p-text">React</p></div>
                    <div className="icon"><img alt="MongoDB icon" src={mongo} /><p className="p-text">MongoDb</p></div>
                    <div className="icon"><img alt="Node.js icon" src={node} /><p className="p-text">Node.js</p></div>
                </section>
            </article>
            <article>
                <header className="row">
                    <h1 className="header pt-3" id="projects">02/ Projects</h1>
                </header>
                {projects.map((project, index)=>{
                return <section className="row project">
                <article className="col-sm-12 col-md-4 my-auto">
                    <div className="project-text">
                        <Link to={"/project"} state={{ some: projects[index].name }}><RoughNotation strokeWidth="2" type="underline" color="#ddd7d5" show="true"><h1 className="project-name">{projects[index].name}</h1></RoughNotation></Link>
                    </div>
                </article>
                <article className="col-sm-12 col-md-4 my-auto">
                    <div className="project-text">
                    <p>{projects[index].word1}</p><p>{projects[index].word2}</p><p>{projects[index].word3}</p>
                    </div>
                </article>
                <article className="col-md-4 ol-sm-12">
                    <div className="project-img">
                        <img className="img-fluid" src={icons[projects[index].image]} alt={projects[index].alt}/>
                    </div>
                </article>
            </section>
                })}
        </article>
        </div>
    )
}