import React from "react";
import "../styles/home.css";
import projects from "../assets/projects.json";
import html from "../assets/imgs/html-icon.png";
import css from "../assets/imgs/css-icon.png";
import js from "../assets/imgs/js-icon.png";
import react from "../assets/imgs/react-icon.png";
import mongo from "../assets/imgs/mongodb.png";
import node from "../assets/imgs/node.png";
import bootstrap4 from "../assets/imgs/bootstrap4.png";
import bootstrap5 from "../assets/imgs/bootstrap5.png";
import handlebars from "../assets/imgs/handlebars.png";
import photoshop from "../assets/imgs/photoshop.png";
import mysql from "../assets/imgs/mysql.png";
import jquery from "../assets/imgs/jquery.png";
let icons = {html, css, js, react, mongo, node, bootstrap4, bootstrap5, handlebars, photoshop, mysql, jquery}

export default function Homepage(){
    return(
        <main id="home">
            <header className="container-fluid">
                <div className="row">
                    <div className="col-12" id="area">
                        <h1 className="black hello-kooky ms-3">Hi, I'm <span id="j">J</span><span id="o">o</span><span id="h">h</span><span id="n1">n</span><span id="n2">n</span><span id="y">y</span></h1>
                        <h2 className="duper-bold black display-5 ms-3">Creative Developer & Designer</h2>
                            <ul className="circles">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                    </div>
                </div>
            </header>
            <article id="projects" className="container mt-5">
                <div className="row mt-5">
                    <h1 className="duper-bold display-1 black">../Projects</h1>
                </div>
                {projects.map((project, index)=>{
                return <section className={projects[index].projectClass}>
                            <h1 className="duper-bold mt-2">{projects[index].name}<span className="tag"> Full stack project</span></h1>
                            <ul>
                            {projects[index].icons.map((icon, index)=>{
                                return <li><img className="img-fluid" src={icons[icon]}/></li>})}
                            </ul>
                    </section>
                })}
            </article>
        </main>
    )
}