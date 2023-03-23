import "../styles/nav.css";
import {NavLink} from "react-router-dom";


export default function Nav(){
    return(
        <div id="nav">
                <ul>
                <NavLink to="/#about">Home</NavLink>
                    <li>About Me</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
        </div>
    )
}