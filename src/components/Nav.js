import "../styles/nav.css";
import {NavLink} from "react-router-dom";

export default function Nav(){
    return(
        <div id="nav">
                <ul>
                <li><NavLink to="/#about">About Me</NavLink></li>
                <li><NavLink to="/#projects">Projects</NavLink></li>
                <li><NavLink to="/#contact">Contact</NavLink></li>
                </ul>
        </div>
    )
}