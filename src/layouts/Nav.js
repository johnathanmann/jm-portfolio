import smiley from "../assets/imgs/black-smiley.png";
import "../styles/nav.css";
export default function Nav(){
    return(
        <nav className="container-fluid w-100 d-flex m-2">
            <img src={smiley} alt="Black smiley face icon" />
            <ul>
                <li><button id="projects-btn" className="duper-bold m-2">Projects</button></li>
                <li className="duper-bold m-2"><button id="about-btn">About</button></li>
                <li className="duper-bold m-2"><button id="contact-btn">Contact</button></li>
            </ul>
        </nav>
    )
}