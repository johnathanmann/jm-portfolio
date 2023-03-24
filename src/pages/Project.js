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
        <div>
            <h1>{wantedProject[0].name}</h1>
        </div>
    )
}