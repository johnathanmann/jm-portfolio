import "../styles/nav.css";
import {NavLink} from "react-router-dom";

export default function Nav(){

    return(
        <nav id="nav">
            <ul>
                <li><NavLink to="/#about">About Me</NavLink></li>
                <li><NavLink to="/#projects">Projects</NavLink></li>
                <li><NavLink to="/#contact">Contact</NavLink></li>
            </ul>
        </nav>
    )
}