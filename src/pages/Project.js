import { useLocation } from "react-router-dom";
import "../styles/project.css";
import projects from "../assets/projects.json";
// import html from "../assets/imgs/html-icon.png";
// import css from "../assets/imgs/css-icon.png";
// import js from "../assets/imgs/js-icon.png";
// import react from "../assets/imgs/react-icon.png";
// import mongo from "../assets/imgs/mongo.png";
// import node from "../assets/imgs/node.png";
// import portrait from "../assets/imgs/portrait.png";
// import envelope from "../assets/imgs/envelope.jpg";
// import barbecue from "../assets/imgs/barbecue.jpg";
// import computer2 from "../assets/imgs/computer-2.jpg";
// import cava from "../assets/imgs/cava.jpg";
  
export default function Project(){
    const {state} = useLocation();

    const wantedProject = projects.filter(function(i) {
        return i.name === state.some;
    });

    return(
        <div id="project">
            <header id='marquees'>
                <div className="marquee" id="language">
                    <div className="marquee__inner" aria-hidden="true">
                        <span>{wantedProject[0].name}</span>
                        <span>{wantedProject[0].name}</span>
                        <span>{wantedProject[0].name}</span>
                        <span>{wantedProject[0].name}</span>
                        <span>{wantedProject[0].name}</span>
                        <span>{wantedProject[0].name}</span>
                    </div>
                </div>
            </header>
            <article className="container">
                <div className="row">
                    <section className="col-md-6" id="info">
                        <h1 className="tagline">{wantedProject[0].tagline}</h1>
                        <a href={wantedProject[0].repo} target="_blank" rel="noreferrer"><h1>Repository</h1></a>
                        <a href={wantedProject[0].deployment} target="_blank" rel="noreferrer"><h1>Deployment</h1></a>
                    </section>
                    <section className="col-md-6" id="info">
                        <p className="p-text">{wantedProject[0].desc}</p>
                    </section>
                </div>
            </article>
        </div>
    )
}