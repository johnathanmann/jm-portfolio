import { useLocation } from "react-router-dom";
import "../styles/project.css";
import projects from "../assets/projects.json";
import yellow from "../assets/imgs/yellow-smiley.png";
import red from "../assets/imgs/red-smiley.png";
import blue from "../assets/imgs/blue-smiley.png";

let smileys = {yellow, red, blue};
  
export default function Project(){
    const {state} = useLocation();

    const wantedProject = projects.filter(function(i) {
        return i.name === state.some;
    });
console.log(wantedProject[0].color)
    return(
        <div id="project">
            <header className="d-flex">
                <h1 className={wantedProject[0].color}>{wantedProject[0].name}</h1><img src={smileys[wantedProject[0].color]} />
            </header>
            <article className="container">
                <div className="row">
                    <section className="col-md-6 duper-bold" id="info">
                        <h1 className="tagline">{wantedProject[0].tagline}</h1>
                        <a href={wantedProject[0].repo} target="_blank" rel="noreferrer"><h1>Repository</h1></a>
                        <a href={wantedProject[0].deployment} target="_blank" rel="noreferrer"><h1>Deployment</h1></a>
                    </section>
                    <section className="col-md-6" id="info">
                        <p className="p-text duper-regular">{wantedProject[0].desc}</p>
                    </section>
                </div>
            </article>
        </div>
    )
}