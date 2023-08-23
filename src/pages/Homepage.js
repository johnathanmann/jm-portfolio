import { Link } from "react-router-dom";
import "../styles/home.css";
import projects from "../assets/projects.json";
import HTML from "../assets/imgs/html-icon.png";
import CSS from "../assets/imgs/css-icon.png";
import JavaScript from "../assets/imgs/js-icon.png";
import React from "../assets/imgs/react-icon.png";
import MongoDB from "../assets/imgs/mongodb.png";
import Nodejs from "../assets/imgs/node.png";
import Bootstrap4 from "../assets/imgs/bootstrap4.png";
import Bootstrap5 from "../assets/imgs/bootstrap5.png";
import Handlebarsjs from "../assets/imgs/handlebars.png";
import Photoshop from "../assets/imgs/photoshop.png";
import MySQL from "../assets/imgs/mysql.png";
import jQuery from "../assets/imgs/jquery.png";
let icons = {HTML, CSS, JavaScript, React, MongoDB, Nodejs, Bootstrap4, Bootstrap5, Handlebarsjs, Photoshop, MySQL, jQuery}

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
                            <h1 className="duper-bold mt-2"><Link to={"/project"} state={{ some: projects[index].name }}>{projects[index].name}</Link><span className="tag"> {projects[index].type}</span></h1>
                            <ul className={projects[index].tooltip}>
                            {projects[index].icons.map((icon, index)=>{
                                return <li className="tooltip"><img className="img-fluid icon" src={icons[icon]}/>
                                <div className="top">
                                    {icon}<i></i>
                                </div></li>})}
                            </ul>
                    </section>
                })}
            </article>
        </main>
    )
}