import { useLocation } from "react-router-dom";
import "../styles/project.css";
import projects from "../assets/projects.json";
  
export default function Project(){
    const {state} = useLocation();
    console.log(state.some)

    const wantedProject = projects.filter(function(i) {
        return i.name === state.some;
    });
    console.log(wantedProject)

    return(
        <div id="project">
            <div id='marquees'>
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
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6" id="info">
                        <h1 className="tagline">{wantedProject[0].tagline}</h1>
                        <a href={wantedProject[0].repo} target="_blank" rel="noreferrer"><h1>Repository</h1></a>
                        <a href={wantedProject[0].deployment} target="_blank" rel="noreferrer"><h1>Deployment</h1></a>
                    </div>
                    <div className="col-md-6" id="info">
                        <p className="p-text">{wantedProject[0].desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}