import React from "react";
import { Link } from "react-router-dom";
import { RoughNotation } from "react-rough-notation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
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
import cans from "../assets/imgs/laying-cans.png";
import "../styles/styles.css";
import "../styles/home.css";

let icons = {envelope, barbecue, computer, computer2, cava, cans}

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
            <h1 className="header p-3" id="about">01/ About Me</h1>
            <article className="row">
                <p className="p-text pt-3">I'm Johnathan Mann, a passionate website developer specializing in React. After discovering my love for web development, I dedicated myself to honing my skills and expanding my knowledge in this dynamic field. In November, I successfully completed a rigorous six-month bootcamp, further solidifying my foundation in website development.<br /> <br /> During my learning journey, I have become proficient in various front-end technologies, including HTML5, CSS3, and JavaScript. With my bootcamp experience, I have gained hands-on exposure to industry best practices. Some of the most fun I have while developing came from collaborating on real-world projects, preparing me to work with others and to understand how development can look from different perspectives. <br /> <br /></p>
                <section id="icons" className="text-center">
                    <div className="icon"><img alt="HTML 5 icon" src={html} /><p className="p-text">HTML</p></div>
                    <div className="icon"><img alt="CSS 3 icon" src={css} /><p className="p-text">CSS</p></div>
                    <div className="icon"><img alt="JavaScript icon" src={js} /><p className="p-text">JavaScript</p></div>
                    <div className="icon"><img alt="React icon" src={react} /><p className="p-text">React</p></div>
                    <div className="icon"><img alt="MongoDB icon" src={mongo} /><p className="p-text">MongoDb</p></div>
                    <div className="icon"><img alt="Node.js icon" src={node} /><p className="p-text">Node.js</p></div>
                </section>
            </article>
            <article>
                    <h1 className="header pt-3" id="projects">02/ Projects</h1>
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
        <article id="contact" className="col-12"> 
            <h1 className="header pt-3" id="projects">03/ Contact</h1>
            <h1><FontAwesomeIcon icon={faEnvelope} color="#ddd7d5"/><span>contact@johnathanmann.com</span></h1>
            <h1><FontAwesomeIcon icon={faGithubSquare} color="#ddd7d5" /><span><a rel="noreferrer" href="https://github.com/johnathanmann" target="_blank">Github</a></span></h1>
            <h1><FontAwesomeIcon icon={faLinkedin} color="#ddd7d5" /><span><a rel="noreferrer" href="https://www.linkedin.com/in/johnathan-mann-03548b240/" target="_blank">Linkedin</a></span></h1>
        </article>
        </div>
    )
}