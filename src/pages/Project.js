import { useLocation } from "react-router-dom";
import { useEffect } from "react";
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

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <div id="project">
            <header data-aos="fade-up" className={wantedProject[0].color}>
                <h1 className={"header "+wantedProject[0].color}>{wantedProject[0].name}</h1>
                <ul>
                {wantedProject[0].tags.map((tag, index)=>{
                                return <li className="project-tag duper-bold big-text">{tag}</li>})}
                </ul>
            </header>
            <article className="container">
                <div className="row">
                    <section className="col-md-6 duper-bold" id="info">
                        <p data-aos="fade-up" className="big-text">{wantedProject[0].tagline}</p>
                        <a data-aos="fade-up" href={wantedProject[0].repo} target="_blank" rel="noreferrer"><p className="big-text">Repository</p></a>
                        <a data-aos="fade-up" href={wantedProject[0].deployment} target="_blank" rel="noreferrer"><p className="big-text">Deployment</p></a>
                    </section>
                    <section className="col-md-6" id="info">
                        <p data-aos="fade-up" className="p-tag duper-regular">{wantedProject[0].desc}</p>
                    </section>
                </div>
            </article>
        </div>
    )
}