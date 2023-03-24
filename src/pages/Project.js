import { Link, useLocation } from "react-router-dom";
import "../styles/project.css"
  
export default function Project(){
    const {state} = useLocation();
console.log(state.some)

    return(
        <div>
            <h1>{state.some}</h1>
        </div>
    )
}