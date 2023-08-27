import smiley from "../assets/imgs/black-smiley.png";
import "../styles/nav.css";
import { useState, useEffect, componentDidMount } from "react";
import { useLocation, NavLink } from "react-router-dom";
export default function Nav(){
    let [active, setActive] = useState("projects")
    let location = useLocation();

    async function getLocation(){
        console.log(location.pathname)
        if(location.pathname === "/"){
            console.log("home")
            setActive("projects")
        }
        if(location.pathname === "/contact"){
            console.log("contact")
            setActive("contact")
        }
        if(location.pathname === "/about"){
            console.log("about")
            setActive("about")
        }
        if(location.pathname === "/project"){
            console.log("project")
            setActive("none")
        }
    }

    useEffect(()=>{
        getLocation()
        },[location])

    return(
        <nav data-aos="fade-up" className="container-fluid w-100 d-flex p-2" id="nav">
            <img src={smiley} alt="Black smiley face icon" m-2 />
            <ul>
                <li className="duper-bold m-2 grow"><NavLink to="/"><button id="projects-btn" style={{ backgroundColor: active === "projects" ? "#E63636" : "#F7F4ED", color: active === "projects" ? "#F7F4ED" : "#E63636" }}>Projects</button></NavLink></li>
                <li><NavLink to="/about"><button id="about-btn" className="duper-bold m-2 grow" style={{ backgroundColor: active === "about" ? "#3F8FB7" : "#F7F4ED", color: active === "about" ? "#F7F4ED" : "#3F8FB7" }}>About</button></NavLink></li>
                <li><NavLink to="contact"><button id="contact-btn" className="duper-bold m-2 grow" style={{ backgroundColor: active === "contact" ? "#F9CD54" : "#F7F4ED", color: active === "contact" ? "#F7F4ED" : "#F9CD54" }}>Contact</button></NavLink></li>
            </ul>
        </nav>
    )
}