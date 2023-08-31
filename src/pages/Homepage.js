import { Link } from "react-router-dom";    
import "../styles/home.css";
import { useEffect } from "react";
import projects from "../assets/projects.json";
import React from "../assets/imgs/react-icon.png";
import MongoDB from "../assets/imgs/mongodb.png";
import Bootstrap4 from "../assets/imgs/bootstrap4.png";
import Bootstrap5 from "../assets/imgs/bootstrap5.png";
import Handlebarsjs from "../assets/imgs/handlebars.png";
import Photoshop from "../assets/imgs/photoshop.png";
import MySQL from "../assets/imgs/mysql.png";
import jQuery from "../assets/imgs/jquery.png";
let icons = {React, MongoDB, Bootstrap4, Bootstrap5, Handlebarsjs, Photoshop, MySQL, jQuery}


export default function Homepage(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <main id="home">
            <div id="home-cover" className="slide-over"></div>
            <header className="container-fluid">
                <div className="row">
                    <div className="col-12" id="area">
                        <h1 data-aos="fade-up" className="black header ms-3">Hi, I'm <span id="j">J</span><span id="o">o</span><span id="h">h</span><span id="n1">n</span><span id="n2">n</span><span id="y">y</span></h1>
                        <h2 data-aos="fade-up" className="duper-bold sub-header black ms-3">Creative Developer & Designer</h2>
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
            <article id="projects" className="container-fluid mx-auto">
                <div className="row">
                    <h1 data-aos="fade-up" className="hello-kooky sub-header black">Projects</h1>
                </div>
                {projects.map((project, index)=>{
                return <section data-aos="fade-up" data-aos-offset="100" className={projects[index].projectClass}>
                            <h1 className="duper-bold big-text mt-2"><Link to={"/project"} state={{ some: projects[index].name }}>{projects[index].name}</Link><span className="tag p-tag"> {projects[index].type}</span></h1>
                            <ul>
                            {projects[index].icons.map((icon, index)=>{
                                return <li className="tooltip"><img className="icon" alt={icon 
                                + " icon"} src={icons[icon]}/>
                                <div className="top duper-regular small-text">
                                    {icon}<i></i>
                                </div></li>})}
                            </ul>
                    </section>
                })}
            </article>
        </main>
    )
}